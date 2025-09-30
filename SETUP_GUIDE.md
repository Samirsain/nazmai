# NazmAI - Setup Guide

## 🚀 Mood-Based Shayari Generator with Premium Features

This guide will help you set up and use the AI-powered shayari generator with premium theme customization.

## 📋 Prerequisites

- Node.js 18+ installed
- pnpm (or npm/yarn) installed
- OpenAI API key (get from [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys))

## 🛠️ Installation

1. **Install dependencies:**
```bash
pnpm install
```

2. **Set up environment variables:**

Create a `.env.local` file in the root directory:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

To get your OpenAI API key:
- Go to https://platform.openai.com/api-keys
- Sign up or log in
- Create a new API key
- Copy the key and paste it in `.env.local`

3. **Run the development server:**
```bash
pnpm dev
```

4. **Open your browser:**
Navigate to `http://localhost:3000`

## ✨ Features

### 🎭 Mood-Based Shayari Generation

#### Free Features (10 generations/day):
- **6 Basic Moods:** Romantic, Sad, Happy, Nostalgic, Motivational, Mystic
- **4 Languages:** Hindi (Devanagari), Urdu (Nastaliq), English, Hinglish (Roman)
- **3 Styles:** Soft & Subtle, Classic Ghazal, Modern Minimal
- Custom mood input
- Copy and share functionality

#### Pro Features (100 generations/day) - ₹199/month:
- All basic features
- Higher generation limit
- Save to collections
- No watermark
- Priority support

#### Premium Features (Unlimited) - ₹499/month:
- **Unlimited Generations**
- **6 Exclusive Premium Moods:**
  - Philosophical
  - Spiritual
  - Revolutionary
  - Sufi
  - Nature
  - Existential
- **5 Premium Themes:**
  - 🌅 Sunset Dreams (orange-pink-purple gradient)
  - 🌊 Ocean Depths (blue-cyan-teal gradient)
  - 🌲 Forest Whispers (green-emerald-lime gradient)
  - 🌙 Midnight Poetry (indigo-purple-pink gradient)
  - 📜 Classic Elegance (elegant gray tones)
- Advanced AI quality
- Priority generation
- 24/7 support

### 🎨 Premium Theme System

Premium users can customize their shayari display with beautiful gradient themes:

1. Select a mood
2. Choose your language and style
3. Pick a premium theme (Premium only)
4. Generate your shayari
5. The poem appears with your selected theme background

### 📊 Usage Tracking

The app automatically tracks:
- Daily generation count
- Plan limits
- Resets daily at midnight
- Stored in browser localStorage

## 🎯 How to Use

### Testing Different Plans

You can test different subscription tiers by:

1. **Switch Plans:** Click on pricing cards to switch between Free, Pro, and Premium
2. **Test Limits:** Try generating more than 10 shayaris on Free plan to see the limit modal
3. **Try Premium Moods:** Click on locked premium moods to see upgrade prompt
4. **Explore Themes:** Switch to Premium plan to access theme customization

### Generating Shayari

1. **Choose a Mood:**
   - Click on preset mood chips (Romantic, Sad, etc.)
   - Or type your own custom mood

2. **Select Premium Mood (Premium only):**
   - Click on premium moods like "Philosophical" or "Sufi"
   - Non-premium users will see upgrade modal

3. **Configure Settings:**
   - Select language (Hindi/Urdu/English/Hinglish)
   - Choose style (Soft/Classic/Modern)
   - Pick premium theme (Premium only)

4. **Generate:**
   - Click "Generate Shayari" button
   - Wait for AI to craft your poem
   - Copy and share your creation

## 🔧 Configuration

### Using Different AI Providers

The app currently uses OpenAI's GPT-3.5-turbo. To change the AI model:

Edit `app/api/generate-shayari/route.ts`:

```typescript
// Change the model
model: "gpt-4", // or "gpt-4-turbo", "gpt-3.5-turbo", etc.

// Adjust temperature for more/less creativity
temperature: 0.9, // 0.0-2.0, higher = more creative

// Adjust max tokens for longer/shorter output
max_tokens: 300, // increase for longer poems
```

### Alternative: Using Groq (Free & Fast)

For a free and faster alternative, use Groq:

1. Get API key from https://console.groq.com/
2. Update `.env.local`:
```env
GROQ_API_KEY=your_groq_api_key_here
```

3. Update `app/api/generate-shayari/route.ts`:
```typescript
const apiKey = process.env.GROQ_API_KEY
const apiUrl = "https://api.groq.com/openai/v1/chat/completions"
// Use model: "mixtral-8x7b-32768" or "llama3-70b-8192"
```

## 🎨 Customization

### Adding New Moods

Edit `components/shayari-generator.tsx`:

```typescript
// Add to free moods
const PRESETS = ["Romantic", "Sad", "Happy", "Nostalgic", "Motivational", "Mystic", "Your New Mood"]

// Or add to premium moods
const PREMIUM_PRESETS = ["Philosophical", "Spiritual", "Revolutionary", "Sufi", "Nature", "Existential", "Your Premium Mood"]
```

### Adding New Premium Themes

Edit `components/shayari-generator.tsx`:

```typescript
const PREMIUM_THEMES = {
  // Add your custom theme
  yourtheme: {
    name: "Your Theme Name",
    gradient: "from-color1 via-color2 to-color3",
    textColor: "text-white", // or "text-foreground"
  },
  // ... existing themes
}
```

### Modifying Usage Limits

Edit `contexts/user-context.tsx`:

```typescript
const getDailyLimit = () => {
  switch (plan) {
    case "free":
      return 10  // Change free tier limit
    case "pro":
      return 100  // Change pro tier limit
    case "premium":
      return Infinity
    default:
      return 10
  }
}
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project on Vercel
3. Add environment variable `OPENAI_API_KEY` in Vercel settings
4. Deploy!

### Important Notes for Production

- The current plan switching is demo mode (localStorage)
- For production, integrate:
  - Payment gateway (Stripe, Razorpay, etc.)
  - Database for user management
  - Authentication system
  - Backend API for secure API key handling

## 🔒 Security Notes

⚠️ **Important:** Never expose API keys in client-side code!

Current setup keeps API keys secure:
- API routes run server-side only
- API key stored in `.env.local` (not committed to git)
- Client sends requests to `/api/generate-shayari`, not directly to OpenAI

## 📝 API Cost Estimates

OpenAI GPT-3.5-turbo pricing (as of 2025):
- ~$0.0005 per generation (300 tokens)
- 1000 generations ≈ $0.50
- Free tier: 10/day = ~$0.15/month
- Pro tier: 100/day = ~$1.50/month (still way below ₹199!)

## 🎯 Next Steps

1. ✅ Set up OpenAI API key
2. ✅ Test shayari generation
3. ✅ Try different moods and themes
4. ✅ Test premium features
5. 🔄 Integrate payment gateway for production
6. 🔄 Add user authentication
7. 🔄 Set up database for saved collections

## 💡 Tips

- Start with Free plan to test features
- Premium themes make shayari sharing more engaging
- Custom moods work great for specific occasions
- Hindi and Urdu generate more authentic shayari
- Experiment with different styles for varied results

## 🐛 Troubleshooting

**"API key not configured" error:**
- Ensure `.env.local` exists with `OPENAI_API_KEY`
- Restart dev server after adding env variables

**Shayari not generating:**
- Check browser console for errors
- Verify API key is valid on OpenAI dashboard
- Check API usage limits on OpenAI

**Premium features not showing:**
- Click on pricing cards to switch plans
- Check browser localStorage for plan setting

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review API documentation
3. Check browser console for errors

Enjoy creating beautiful shayari! ✨🎭
