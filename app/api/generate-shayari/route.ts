import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { mood, language, style } = await request.json()

    // Check for API key - try Groq first, then Hugging Face
    const groqKey = process.env.GROQ_API_KEY
    const hfKey = process.env.HUGGINGFACE_API_KEY
    
    if (!groqKey && !hfKey) {
      return NextResponse.json(
        { error: "No API key configured. Please add GROQ_API_KEY or HUGGINGFACE_API_KEY to your .env.local file." },
        { status: 500 }
      )
    }

    // Build the prompt based on parameters
    const languageMap: Record<string, string> = {
      hindi: "Hindi (Devanagari script - देवनागरी)",
      urdu: "Urdu (Nastaliq script - اردو)",
      english: "English",
      hinglish: "Hinglish (Roman script)",
    }

    const styleMap: Record<string, string> = {
      soft: "soft and subtle, with gentle metaphors",
      classic: "classic ghazal style with traditional couplets (shers)",
      modern: "modern minimal style with contemporary expressions",
    }

    const systemPrompt = "You are a master shayar (poet) who writes beautiful Urdu and Hindi shayari. You understand emotions deeply and express them through poetic verses."

    const userPrompt = `Write a beautiful shayari (Urdu/Hindi poetry) with the following specifications:
- Mood/Theme: ${mood}
- Language: ${languageMap[language] || "Hindi"}
- Style: ${styleMap[style] || "soft and subtle"}

Requirements:
- Write 4-6 lines of original shayari
- Capture the essence of "${mood}"
- Use poetic devices like metaphor, imagery, and emotion
- Make it authentic and touching
- Use advanced literary techniques and deeper philosophical themes

Only respond with the shayari lines, no explanations or additional text.`

    let response
    let shayari = ""

    // Try Groq first (faster and more reliable)
    if (groqKey) {
      try {
        console.log("Calling Groq API...")
        response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${groqKey}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt },
            ],
            temperature: 0.9,
            max_tokens: 300,
          }),
        })

        if (response.ok) {
          const data = await response.json()
          console.log("Groq response:", data)
          shayari = data.choices[0]?.message?.content?.trim() || ""
          if (shayari) {
            console.log("✅ Shayari generated successfully via Groq")
          }
        } else {
          const errorData = await response.json().catch(() => ({}))
          console.error("Groq API error:", response.status, errorData)
        }
      } catch (err) {
        console.error("Groq API error:", err)
      }
    }

    // Fallback to Hugging Face if Groq failed
    if (!shayari && hfKey) {
      const models = [
        "mistralai/Mistral-7B-Instruct-v0.2",
        "meta-llama/Llama-2-7b-chat-hf",
      ]

      for (const model of models) {
        try {
          const fullPrompt = `${systemPrompt}\n\n${userPrompt}\n\nShayari:`
          
          response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${hfKey}`,
            },
            body: JSON.stringify({
              inputs: fullPrompt,
              parameters: {
                max_new_tokens: 300,
                temperature: 0.9,
                top_p: 0.95,
                return_full_text: false,
              },
            }),
          })

          if (response.ok) {
            const data = await response.json()
            if (Array.isArray(data) && data[0]?.generated_text) {
              shayari = data[0].generated_text.trim()
              break
            }
          }
        } catch (err) {
          console.error(`HF model ${model} error:`, err)
          continue
        }
      }
    }

    // Clean up the response
    shayari = shayari
      .replace(/^Shayari:\s*/i, "")
      .replace(/^Here (is|are).*?:\s*/i, "")
      .replace(/^.*?poetry.*?:\s*/i, "")
      .trim()

    if (!shayari) {
      console.error("❌ No shayari generated from any API")
      return NextResponse.json({ 
        error: "Failed to generate shayari. Please check your API keys and try again." 
      }, { status: 500 })
    }

    console.log("✅ Returning shayari:", shayari.substring(0, 50) + "...")
    return NextResponse.json({ text: shayari })
  } catch (error: any) {
    console.error("❌ Error generating shayari:", error)
    return NextResponse.json({ error: error.message || "An unexpected error occurred" }, { status: 500 })
  }
}
