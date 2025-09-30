# 🚀 Groq API Setup (Recommended)

## Why Groq?

✅ **Completely FREE**  
✅ **Super FAST** (2-3 seconds per generation)  
✅ **Very Reliable** (No 404 errors)  
✅ **Great for Hindi/Urdu**  
✅ **Easy Setup**  

## 📝 Get Your FREE Groq API Key

### Step 1: Sign Up
1. Visit: **https://console.groq.com/**
2. Click "Sign Up" or "Sign In"
3. Use Google/GitHub to sign in (fastest way)

### Step 2: Create API Key
1. After login, go to: **https://console.groq.com/keys**
2. Click **"Create API Key"**
3. Give it a name: `NazmAI`
4. Click **"Submit"**
5. **COPY the key** (starts with `gsk_...`)

### Step 3: Add to Project
1. Open your `.env.local` file
2. Replace `your_groq_api_key_here` with your actual key:

```env
GROQ_API_KEY=gsk_YourActualKeyHere
```

3. Save the file

### Step 4: Restart Server
- Terminal में Ctrl+C दबाएं
- फिर run करें: `pnpm dev`

## 🎯 Test It!

1. Open: http://localhost:3001 (or 3000)
2. Select mood: "Romantic"
3. Language: "Hindi"
4. Click "Generate Shayari"
5. ⚡ **Result in 2-3 seconds!**

## 🆚 Comparison

| Feature | Groq | Hugging Face |
|---------|------|--------------|
| Speed | ⚡ 2-3s | 🐌 10-30s |
| Reliability | ✅ 99% | ⚠️ ~60% |
| Quality | 🌟 Excellent | 🌟 Good |
| Setup | Easy | Easy |
| Free | ✅ Yes | ✅ Yes |

## 💡 Models Used

Groq uses **Llama 3.1 70B** - one of the best open-source models for:
- Hindi text generation
- Creative writing
- Poetry and shayari

## 🔥 Rate Limits

**Free Tier:**
- 30 requests per minute
- 14,400 requests per day
- More than enough for this app!

## ✅ You're Done!

Once you add your Groq key, your shayari generator will be:
- ⚡ Lightning fast
- 🎯 Super reliable
- 🎭 Creating beautiful poetry

**Happy shayari writing! 🚀✨**
