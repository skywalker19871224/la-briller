import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const Helo = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background Video Overlay - Auto-switching based on orientation */}
            <div className="absolute inset-0 z-0 bg-black/5">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover scale-[1.02]"
                >
                    {/* PC用 (横型) */}
                    <source 
                        src="/assets/movies/hero-main-cm.mp4" 
                        type="video/mp4" 
                        media="(orientation: landscape)"
                    />
                    {/* スマホ用 (縦型) */}
                    <source 
                        src="/assets/movies/hero-portrait.mp4" 
                        type="video/mp4" 
                        media="(orientation: portrait)"
                    />
                    {/* フォールバック (念のため横型) */}
                    <source src="/assets/movies/hero-main-cm.mp4" type="video/mp4" />
                </video>
                
                {/* 
                   PC版のみ表示されるグラデーション。
                   スマホ版（portrait）では動画の明るさを活かすため非表示 
                */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent z-10 hidden landscape:block" />
            </div>

            {/* 
               テキスト・ボタンエリア。
               landscape:flex で横画面の時のみ表示。
               portrait:hidden で縦画面の時は非表示（動画を主役にする）。
            */}
            <div className="container mx-auto px-6 relative z-20 h-full flex-col justify-end pb-20 md:pb-32 hidden landscape:flex">
                <div className="max-w-3xl">
                    <div className="flex items-center space-x-3 mb-6 animate-in fade-in slide-in-from-left duration-1000">
                        <div className="h-[1px] w-8 md:w-12 bg-parfait-blue" />
                        <span className="text-parfait-blue font-medium tracking-[0.4em] text-[11px] md:text-sm uppercase drop-shadow-md">
                            Parfait Clinic × La Briller
                        </span>
                    </div>

                    <p className="text-sm md:text-lg text-white font-light leading-relaxed mb-10 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
                        大切な天然歯を守り抜くこと。それがパルフェクリニックの誠実さ。<br className="hidden md:block" />
                        世界初、PuSL技術が実現した圧倒的な透明感と強靭さ。<br className="hidden md:block" />
                        最短2回の通院で、あなたは新しい自分と出逢うことになります。
                    </p>

                    <div className="flex animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
                        <Button
                            asChild
                            className="h-14 md:h-16 px-10 md:px-12 bg-white/10 backdrop-blur-lg border border-white/40 hover:bg-white/20 hover:border-white/60 text-white rounded-none text-sm md:text-md tracking-[0.2em] font-medium shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
                        >
                            <a href="https://parfait-clinic.com/line-friends/">
                                <span className="flex items-center">
                                    LINEから診療予約
                                    <MessageCircle className="ml-3 w-4 h-4 group-hover:scale-110 transition-transform" />
                                </span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* スマホ版（Portrait）専用の最小限ブランディング表記 */}
            <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-end pb-12 landscape:hidden">
                <div className="flex items-center space-x-3 mb-4 animate-in fade-in duration-1000">
                    <div className="h-[1px] w-8 bg-parfait-blue" />
                    <span className="text-parfait-blue font-medium tracking-[0.4em] text-[11px] uppercase drop-shadow-md">
                        Parfait Clinic × La Briller
                    </span>
                </div>
            </div>

            {/* Side Branding - PC版のみ */}
            <div className="absolute right-0 bottom-0 p-12 hidden lg:block vertical-rl z-20">
                <p className="text-[10px] text-gray-400 tracking-[0.5em] uppercase font-light">
                    The Art of Precision Dentistry
                </p>
            </div>
        </section>
    );
};
