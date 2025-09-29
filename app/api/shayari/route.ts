import type { NextRequest } from "next/server"
import { generateText } from "ai"

export async function POST(req: NextRequest) {
  try {
    const { mood, lang, style } = await req.json()

    const langInstruction =
      lang === "hindi"
        ? "Write in Hindi (Devanagari)."
        : lang === "urdu"
          ? "Write in Urdu Nastaliq."
          : lang === "english"
            ? "Write in English."
            : "Write in Roman Hindi (Hinglish)."

    const styleInstruction =
      style === "classic"
        ? "Use a classic ghazal tone with modest rhyme."
        : style === "modern"
          ? "Use a modern minimal style with crisp metaphors."
          : "Use a soft, subtle tone with gentle imagery."

    const prompt = [
      `You are a poet who writes short, soulful shayari. The user's mood is: "${mood}".`,
      langInstruction,
      styleInstruction,
      "Write 4 short lines max. Keep it concise and evocative. Do not add any prefixes or explanations.",
    ].join(" ")

    const { text } = await generateText({
      model: "openai/gpt-5-mini",
      prompt,
    })

    return Response.json({ text })
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || "Error generating shayari" }), { status: 500 })
  }
}
