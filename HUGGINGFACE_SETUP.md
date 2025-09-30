# 🤗 Hugging Face Setup Guide

## क्यों Hugging Face?

- ✅ **Completely FREE** - No credit card needed
- ✅ **Unlimited API calls** (with rate limits)
- ✅ **Open source models**
- ✅ **No cost per token**
- ✅ **Great for Hindi/Urdu text generation**

## 📝 Step-by-Step Setup

### 1. Create Hugging Face Account

1. Visit: **https://huggingface.co/**
2. Click "Sign Up" (top right)
3. Create free account with email

### 2. Get Your API Token

1. Go to: **https://huggingface.co/settings/tokens**
2. Click **"New token"**
3. Give it a name: `"NazmAI-Dev"`
4. Select **"Read"** access (this is enough)
5. Click **"Generate a token"**
6. **COPY** the token (starts with `hf_...`)

### 3. Add Token to Project

1. Open `.env.local` file in your project root
2. Replace the placeholder with your token:

```env
HUGGINGFACE_API_KEY=hf_YourActualTokenHere
```

3. Save the file

### 4. Restart Server

```bash
# Press Ctrl+C in terminal to stop server
# Then run:
pnpm dev
```

## 🎯 Testing

1. Open http://localhost:3000
2. Select a mood (e.g., "Romantic")
3. Choose language (Hindi recommended)
4. Click "Generate Shayari"
5. Wait 5-10 seconds (first request may be slower as model loads)

## 🚀 Model Being Used

**Mistral Mixtral-8x7B-Instruct-v0.1**
- One of the best open-source models
- Great for creative writing
- Supports multiple languages including Hindi/Urdu
- FREE to use via Hugging Face API

## ⚡ Performance Notes

### First Request
- May take 10-20 seconds as model loads
- You might see "Model is loading" message
- Just wait and try again

### Subsequent Requests
- Much faster (2-5 seconds)
- Model stays loaded for ~15 minutes

## 🔄 Alternative Models

If you want to try different models, edit `app/api/generate-shayari/route.ts`:

```typescript
// Option 1: Llama 3 (Good for Hindi)
"https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct"

// Option 2: Gemma (Google's model)
"https://api-inference.huggingface.co/models/google/gemma-7b-it"

// Option 3: Mistral 7B (Faster but less capable)
"https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2"

// Current: Mixtral (Best quality, slower)
"https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1"
```

## 💡 Tips

1. **Hindi/Urdu शायरी works great!** The model understands Devanagari script
2. **Be specific with moods** - "Rainy evening loneliness" works better than just "Sad"
3. **First generation is slow** - Be patient!
4. **Premium moods** work better with detailed prompts

## 🐛 Troubleshooting

### "API key not configured"
- Make sure `.env.local` exists in project root
- Check token starts with `hf_`
- Restart server after adding token

### "Model is loading"
- Wait 10-20 seconds
- Try again - this is normal for first request
- Model will stay loaded afterward

### "Rate limit exceeded"
- Free tier has limits (~1000 requests/day)
- Wait a few minutes or create another account

### Poor Quality Shayari
- Try different model (see alternatives above)
- Make mood more specific
- Use Hindi or Urdu language for better results

## 📊 Cost Comparison

| Provider | Cost | Limits |
|----------|------|--------|
| **Hugging Face** | FREE | ~1000 req/day |
| OpenAI GPT-3.5 | $0.0005/req | Need credit card |
| Groq | FREE | 30 req/min |

## 🎉 You're Ready!

Your shayari generator is now powered by FREE AI! 

Visit: http://localhost:3000

Happy shayari writing! 🎭✨
