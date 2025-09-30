"use client"

import { Quote, Wand2 } from "lucide-react"

const poets = [
  {
    name: "Jaun Elia",
    nameUrdu: "جون ایلیا",
    years: "1931-2002",
    quote: "मैं अकेला ही चला था जानिब-ए-मंज़िल मगर,\nलोग साथ आते गए और कारवाँ बनता गया।",
    quoteUrdu: "میں اکیلا ہی چلا تھا جانب منزل مگر\nلوگ ساتھ آتے گئے اور کارواں بنتا گیا",
    gradient: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Mirza Ghalib",
    nameUrdu: "مرزا غالب",
    years: "1797-1869",
    quote: "हज़ारों ख़्वाहिशें ऐसी कि हर ख़्वाहिश पे दम निकले,\nबहुत निकले मेरे अरमान लेकिन फिर भी कम निकले।",
    quoteUrdu: "ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے\nبہت نکلے مرے ارمان لیکن پھر بھی کم نکلے",
    gradient: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    name: "Faiz Ahmed Faiz",
    nameUrdu: "فیض احمد فیض",
    years: "1911-1984",
    quote: "बोल कि लब आज़ाद हैं तेरे,\nबोल ज़बान अब तक तेरी है।",
    quoteUrdu: "بول کہ لب آزاد ہیں تیرے\nبول زبان اب تک تیری ہے",
    gradient: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Allama Iqbal",
    nameUrdu: "علامہ اقبال",
    years: "1877-1938",
    quote: "ख़ुदी को कर बुलंद इतना कि हर तक़दीर से पहले,\nख़ुदा बंदे से खुद पूछे बता तेरी रज़ा क्या है।",
    quoteUrdu: "خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے\nخدا بندے سے خود پوچھے بتا تیری رضا کیا ہے",
    gradient: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Gulzar",
    nameUrdu: "گلزار",
    years: "1934-Present",
    quote: "कुछ तो बात है कि हस्ती मिटती नहीं हमारी,\nसदियों रहा है दुश्मन दौर-ए-ज़माना हमारा।",
    quoteUrdu: "کچھ تو بات ہے کہ ہستی مٹتی نہیں ہماری\nصدیوں رہا ہے دشمن دور زمانہ ہمارا",
    gradient: "from-indigo-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
  {
    name: "Ahmad Faraz",
    nameUrdu: "احمد فراز",
    years: "1931-2008",
    quote: "रंजिश ही सही दिल ही दुखाने के लिए आ,\nआ फिर से मुझे छोड़ के जाने के लिए आ।",
    quoteUrdu: "رنجش ہی سہی دل ہی دکھانے کے لیے آ\nآ پھر سے مجھے چھوڑ کے جانے کے لیے آ",
    gradient: "from-pink-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
  },
]

export function FamousPoets() {
  return (
    <section id="poets" className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-pink-50 to-background dark:from-purple-950/20 dark:via-pink-950/20 dark:to-background" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 glass-card text-sm font-medium mb-4">
            <Quote className="h-4 w-4 text-primary" />
            <span>Masters of Poetry</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Legendary Shayars
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get inspired by the timeless words of history's greatest poets
          </p>
        </div>

        {/* Large Hero Banner with Poets */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/10">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-blue-600/90" />
          
          {/* Content Container */}
          <div className="relative p-8 md:p-12">
            {/* Poets Row - Horizontal Layout */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-8">
              {poets.slice(0, 3).map((poet, idx) => (
                <div
                  key={poet.name}
                  className="flex flex-col items-center group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="relative w-28 h-28 md:w-36 md:h-36 mb-3 transform transition-all duration-300 group-hover:scale-110">
                    <div className={`absolute inset-0 bg-gradient-to-br ${poet.gradient} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                    <div className="relative w-full h-full rounded-full border-4 border-white/90 dark:border-white/80 shadow-2xl overflow-hidden">
                      <img
                        src={poet.image}
                        alt={poet.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg md:text-xl font-bold text-white">{poet.name}</h3>
                    <p className="text-sm text-white/80 font-arabic">{poet.nameUrdu}</p>
                    <p className="text-xs text-white/70 mt-1">{poet.years}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Quote - Large Display */}
            <div className="max-w-4xl mx-auto text-center">
              <Quote className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-6 text-white/30" />
              <blockquote className="space-y-4">
                <p className="text-xl md:text-3xl font-bold text-white leading-relaxed italic">
                  {poets[0].quote}
                </p>
                <p className="text-lg md:text-2xl text-white/90 font-arabic leading-relaxed">
                  {poets[0].quoteUrdu}
                </p>
                <footer className="text-white/80 text-sm md:text-base font-semibold mt-4">
                  — {poets[0].name}
                </footer>
              </blockquote>
            </div>

            {/* Bottom Poets Row */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-12">
              {poets.slice(3, 6).map((poet, idx) => (
                <div
                  key={poet.name}
                  className="flex flex-col items-center group"
                  style={{ animationDelay: `${(idx + 3) * 100}ms` }}
                >
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mb-3 transform transition-all duration-300 group-hover:scale-110">
                    <div className={`absolute inset-0 bg-gradient-to-br ${poet.gradient} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                    <div className="relative w-full h-full rounded-full border-4 border-white/90 dark:border-white/80 shadow-2xl overflow-hidden">
                      <img
                        src={poet.image}
                        alt={poet.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-base md:text-lg font-bold text-white">{poet.name}</h3>
                    <p className="text-xs text-white/80 font-arabic">{poet.nameUrdu}</p>
                    <p className="text-xs text-white/70 mt-1">{poet.years}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <a
                href="#generator"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-white text-purple-600 font-bold text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
              >
                <Wand2 className="h-5 w-5" />
                Create Your Shayari Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
