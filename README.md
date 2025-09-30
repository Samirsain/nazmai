# NazmAI - Mood-Based Shayari Generator 🎭✨

An AI-powered shayari (poetry) generator with mood-based suggestions and beautiful theme customization.

**Created by:** [Samir Sain](https://github.com/samirsain)

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Powered by Groq](https://img.shields.io/badge/Powered%20by-Groq-FF6B6B?style=for-the-badge)](https://groq.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## ✨ Features

### 🎭 Mood-Based Shayari Generation
- **6 Free Moods:** Romantic, Sad, Happy, Nostalgic, Motivational, Mystic
- **6 Premium Moods:** Philosophical, Spiritual, Revolutionary, Sufi, Nature, Existential
- **Custom Mood Input:** Describe any mood or emotion
- **4 Languages:** Hindi (देवनागरी), Urdu (نستعلیق), English, Hinglish (Roman)
- **3 Styles:** Soft & Subtle, Classic Ghazal, Modern Minimal

### 🎨 Premium Theme System
Premium users get access to 5 beautiful gradient themes:
- 🌅 **Sunset Dreams** - Orange to pink to purple
- 🌊 **Ocean Depths** - Blue to cyan to teal
- 🌲 **Forest Whispers** - Green to emerald to lime
- 🌙 **Midnight Poetry** - Indigo to purple to pink
- 📜 **Classic Elegance** - Elegant gray tones

### 💎 Subscription Tiers
- **Free:** 10 shayari/day, basic moods
- **Pro (₹199/mo):** 100 shayari/day, all features
- **Premium (₹499/mo):** Unlimited generations, premium moods & themes

### 🚀 Technical Features
- Server-side AI generation using OpenAI API
- Real-time usage tracking
- Daily limit reset
- LocalStorage persistence
- Responsive design
- Dark mode support
- Premium modal with upgrade prompts

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd saas-
pnpm install
```

### 2. Set Up OpenAI API

Create a `.env.local` file in the root directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

**Get your API key:**
1. Go to [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Sign up or log in
3. Create a new API key
4. Copy and paste it in `.env.local`

### 3. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Detailed Setup

For comprehensive setup instructions, configuration options, and customization guide, see **[SETUP_GUIDE.md](./SETUP_GUIDE.md)**

## 🎯 How It Works

### User Flow
1. User selects a mood (free or premium)
2. Chooses language and style preferences
3. Premium users can select a theme
4. Clicks "Generate Shayari"
5. AI crafts a beautiful poem based on inputs
6. User can copy and share the result

### Architecture
```
User Input → Next.js Frontend → API Route → OpenAI API → Generated Shayari → User
                                    ↓
                              Usage Tracking
                                    ↓
                              LocalStorage
```

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **AI Provider:** OpenAI GPT-3.5-turbo
- **State Management:** React Context
- **Icons:** Lucide React

## 📁 Project Structure

```
saas-/
├── app/
│   ├── api/
│   │   └── generate-shayari/     # API route for AI generation
│   ├── home/                      # Main app page
│   ├── plans/                     # Pricing page
│   └── layout.tsx                 # Root layout with providers
├── components/
│   ├── shayari-generator.tsx     # Main generator component
│   ├── mood-chip.tsx              # Mood selection chips
│   ├── pricing.tsx                # Pricing cards
│   ├── plan-badge.tsx             # Usage indicator
│   └── ui/                        # Reusable UI components
├── contexts/
│   └── user-context.tsx           # User plan & usage tracking
└── SETUP_GUIDE.md                 # Comprehensive setup guide
```

## 🎨 Customization

### Add New Moods
Edit `components/shayari-generator.tsx`:
```typescript
const PRESETS = ["Romantic", "Sad", ..., "YourMood"]
const PREMIUM_PRESETS = ["Philosophical", ..., "YourPremiumMood"]
```

### Add New Themes
Edit `components/shayari-generator.tsx`:
```typescript
const PREMIUM_THEMES = {
  yourtheme: {
    name: "Your Theme",
    gradient: "from-color1 via-color2 to-color3",
    textColor: "text-white",
  }
}
```

### Change Usage Limits
Edit `contexts/user-context.tsx`:
```typescript
case "free": return 10  // your limit
case "pro": return 100  // your limit
```

## 🔐 Security

- ✅ API keys stored server-side only
- ✅ Environment variables in `.env.local`
- ✅ API routes for secure communication
- ✅ No client-side API key exposure

## 🚀 Deployment

### Deploy to Vercel

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variable: `OPENAI_API_KEY`
4. Deploy!

### Production Checklist

- [ ] Set up payment gateway (Stripe/Razorpay)
- [ ] Add user authentication
- [ ] Set up database for user data
- [ ] Implement proper session management
- [ ] Add rate limiting
- [ ] Set up monitoring and analytics

## 💰 API Costs

OpenAI GPT-3.5-turbo (estimated):
- ~$0.0005 per shayari
- Free tier (10/day) ≈ $0.15/month
- Pro tier (100/day) ≈ $1.50/month

Cost is minimal compared to subscription pricing!

## 📱 Testing Plans

The app includes demo mode for testing:
1. Click pricing cards to switch plans
2. Test usage limits
3. Try premium features
4. No payment required for demo

**Note:** In production, integrate payment processing.

## 🐛 Troubleshooting

**API not working:**
- Verify `.env.local` file exists
- Check API key is valid
- Restart dev server after adding env variables

**Premium features not showing:**
- Click pricing cards to upgrade plan
- Check browser console for errors
- Clear localStorage if needed

## 📚 Documentation

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Comprehensive setup and configuration
- **[Next.js Docs](https://nextjs.org/docs)** - Next.js documentation
- **[OpenAI API Docs](https://platform.openai.com/docs)** - OpenAI API reference

## 🎯 Roadmap

- [ ] Add user authentication (NextAuth.js)
- [ ] Save shayari to collections
- [ ] Share to social media
- [ ] Export as images
- [ ] Add more languages
- [ ] Voice narration
- [ ] Mobile app version

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is for educational purposes. Please ensure compliance with OpenAI's usage policies.

## 👨‍💻 Developer

**Samir Sain**
- Portfolio: [samirsain.dev](https://samirsain.dev)
- GitHub: [@samirsain](https://github.com/samirsain)
- Twitter: [@samirsain](https://twitter.com/samirsain)

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React Framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type Safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Groq API](https://groq.com/)** - Fast AI Inference (Llama 3.3 70B)
- **[shadcn/ui](https://ui.shadcn.com/)** - UI Components
- **[Lucide Icons](https://lucide.dev/)** - Beautiful Icons

## 📄 License

© 2025 Samir Sain. All rights reserved.

This project is created and maintained by Samir Sain.

---

**Ready to create beautiful shayari?** 🎭✨

Get started by setting up your Groq API key and running `pnpm dev`!

For detailed instructions, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)

**Made with ❤️ by Samir Sain using Next.js**