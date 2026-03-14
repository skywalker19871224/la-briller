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
                    {/* 横向き（PC・iPad横・スマホ横） */}
                    <source 
                        src="/assets/movies/hero-landscape.mp4" 
                        type="video/mp4" 
                        media="(orientation: landscape)"
                    />
                    {/* 縦向き（スマホ縦・iPad縦） */}
                    <source 
                        src="/assets/movies/hero-portrait.mp4" 
                        type="video/mp4" 
                        media="(orientation: portrait)"
                    />
                    {/* フォールバック */}
                    <source src="/assets/movies/hero-landscape.mp4" type="video/mp4" />
                </video>
                {/* Removed dark gradient to let the video shine */}
            </div>

            {/* Minimal Branding - 常に表示 (全デバイス共通) */}
            <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-end pb-[5px]">
                <div className="flex items-center space-x-3 mb-0 animate-in fade-in duration-1000 delay-500">
                    <div className="h-[1px] w-8 md:w-12 bg-parfait-blue" />
                    <span className="text-parfait-blue font-medium tracking-[0.4em] text-[11px] md:text-sm uppercase drop-shadow-md">
                        Parfait Clinic × La Briller
                    </span>
                </div>
            </div>
        </section>
    );
};
