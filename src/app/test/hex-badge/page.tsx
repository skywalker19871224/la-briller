import { HexBadge } from "@/components/ui/HexBadge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function HexBadgeTest() {
  return (
    <main className="min-h-screen bg-slate-100 flex flex-col pt-32">
      <Header />
      <div className="flex-1 container mx-auto px-6 py-20 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-12 text-slate-800">
          HexBadge Transparency Check
        </h1>
        
        <div className="relative p-20 rounded-3xl overflow-hidden bg-white shadow-inner flex items-center justify-center">
          {/* Background pattern to prove transparency */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#2F5672 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          {/* The Component */}
          <HexBadge />
        </div>

        <div className="mt-20 max-w-xl text-slate-600 text-center leading-relaxed">
          <p>
            画像ファイルをくり抜くのではなく、SVGコードで直接描画しました。<br />
            これにより、<b>背景は完全に透過</b>し、どんな背景（写真やグラデーション）の上でも<br />
            縁がガタつかず、文字も常に鮮明に表示されます。
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
