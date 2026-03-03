import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Microscope, ShieldCheck, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-parfait-white selection:bg-gold/30">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-parfait-white via-parfait-white/80 to-transparent z-10" />
          <div className="w-full h-full bg-slate-200 animate-pulse object-cover">
            {/* Alt for Image AI: "Elegant and clean luxury clinic interior with soft warm lighting, marble floors, and modern minimalist aesthetic" */}
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              [ hero.jpg: 信頼感のある院内風景 ]
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold font-medium tracking-[0.3em] text-xs uppercase">The New Standard of Dental Aesthetics</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-serif text-foreground leading-[1.1] mb-8">
              精密が描く、<br />
              <span className="text-labriller-blue">究極の美。</span>
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10 max-w-lg">
              パルフェクリニックの誇る「おもてなしの心」と、La Brillerが実現する「0.04mmの技術力」。二つの頂点が交わり、今、セレブリティのための審美歯科が完成しました。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="h-14 px-10 bg-labriller-blue hover:bg-labriller-blue/90 text-white rounded-none text-md tracking-wider">
                カウンセリング予約
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="h-14 px-10 border-gold/30 text-gold hover:bg-gold/5 rounded-none text-md">
                コンセプトを見る
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Detail */}
        <div className="absolute bottom-12 right-12 z-20 hidden lg:block">
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <p className="font-serif text-2xl text-foreground">0.04mm</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-none">Precision Tech</p>
            </div>
            <div className="h-12 w-[1px] bg-gold/50" />
            <div className="text-right">
              <p className="font-serif text-2xl text-foreground">1:1</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-none">Counseling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-gold font-medium tracking-[0.2em] text-xs uppercase block mb-4">Features</span>
            <h2 className="text-4xl font-serif mb-6 text-balance">
              パルフェクリニックがLa Brillerを選んだ、<br className="hidden md:block" />3つの確信。
            </h2>
            <div className="h-[2px] w-20 bg-gold/20 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="group">
              <div className="aspect-[4/5] bg-slate-100 mb-8 overflow-hidden relative">
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  [ feature1.png: 最新設備 ]
                </div>
                {/* Alt for Image AI: "High-end dental microscope and specialized tools for micro-veneer procedure in a surgical room" */}
                <div className="absolute inset-0 border-gold/0 group-hover:border-gold/20 border transition-all duration-500" />
              </div>
              <div className="flex items-start space-x-4">
                <Microscope className="w-6 h-6 text-labriller-blue mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif text-xl mb-3">先進の顕微鏡技術</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    肉眼では不可能な0.04mmの精度を実現。歯を極限まで削らず、本来の健康を維持しながら理想の形状を創り上げます。
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <div className="aspect-[4/5] bg-slate-100 mb-8 overflow-hidden relative">
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  [ feature2.png: バリアフリー ]
                </div>
                {/* Alt for Image AI: "Luxurious and accessible clinic VIP room with comfortable seating and barrier-free design" */}
                <div className="absolute inset-0 border-gold/0 group-hover:border-gold/20 border transition-all duration-500" />
              </div>
              <div className="flex items-start space-x-4">
                <ShieldCheck className="w-6 h-6 text-labriller-blue mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif text-xl mb-3">完全プライベート空間</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    患者様のプライバシーと心地よさを最優先。バリアフリー設計のVIPルーム等、最上のリラックス環境を完備。
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="aspect-[4/5] bg-slate-100 mb-8 overflow-hidden relative">
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  [ process_step1.png: 診察の流れ ]
                </div>
                {/* Alt for Image AI: "A close-up of a dentist consulting with a patient, focusing on a digital screen showing a 3D dental model" */}
                <div className="absolute inset-0 border-gold/0 group-hover:border-gold/20 border transition-all duration-500" />
              </div>
              <div className="flex items-start space-x-4">
                <Star className="w-6 h-6 text-labriller-blue mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif text-xl mb-3">オーダーメイド・デザイン</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    お一人おひとりの骨格やライフスタイルに合わせ、ミリ単位で「あなただけの美しさ」を設計します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-32 bg-parfait-white border-y border-gold/10">
        <div className="container mx-auto px-6">
          <Card className="rounded-none border-none shadow-none bg-transparent overflow-hidden">
            <CardContent className="p-0 flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2 aspect-square bg-slate-200">
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  [ doctor_image.jpg ]
                </div>
                {/* Alt for Image AI: "Portrait of a professional and warm-smiling Japanese dentist in a premium white lab coat, standing in a high-end clinic lobby" */}
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="h-[1px] w-8 bg-gold" />
                  <span className="text-gold font-medium tracking-[0.2em] text-xs uppercase italic">Produce Philosophy</span>
                </div>
                <h2 className="text-4xl font-serif mb-8 italic">「妥協しない。それがパルフェの矜持です」</h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p>
                    私たちがLa Brillerをプロジェクトのパートナーに選んだ理由はただ一つ、その「狂気的とも言える技術への執着」です。
                  </p>
                  <p>
                    審美歯科において、0.1mmの差は天と地の差を生みます。La Brillerが持つ世界最高峰の技術を、パルフェクリニックの最高のホスピタリティに乗せて皆様にお届けします。
                  </p>
                  <p className="pt-4 text-foreground font-serif text-xl">
                    パルフェクリニック 総院長<br />
                    <span className="text-sm text-gold tracking-widest mt-1 block">DR. PHILOSOPHY</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer / Contact Preview */}
      <footer className="py-20 bg-foreground text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="font-serif text-3xl mb-12">美しさは、確かな信頼から生まれる。</p>
          <div className="flex justify-center space-x-8 text-xs tracking-[0.4em] uppercase text-white/40 mb-12">
            <span>Parfait Clinic</span>
            <span className="text-gold/50">×</span>
            <span>La Briller</span>
          </div>
          <p className="text-white/20 text-[10px] tracking-widest">© 2026 Parfait Clinic x La Briller. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
