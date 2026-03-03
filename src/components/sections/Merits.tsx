import { Sparkles } from "lucide-react";

const merits = [
    { id: 1, title: <>歯を削らず、<br />貼るだけ</> },
    { id: 2, title: <>欠けや変形も、<br />隙間補正</> },
    { id: 3, title: <>通院 <span className="text-2xl font-bold">2</span> 回のみ</> },
    { id: 4, title: <>紙より薄い<br /><span className="text-[13px]">0.04mmのベニア</span></> },
    { id: 5, title: <>違和感ゼロの<br />美しさ</> },
    { id: 6, title: <>色選択<span className="text-xl">可能</span></> },
];

export const Merits = () => {
    return (
        <section
            className="relative py-20 md:py-32 overflow-hidden bg-white"
            style={{
                backgroundImage: "url('/assets/textures/texture_bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Soft gradient overlay for transparency feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-blue-50/40 to-white/95" />

            <div className="relative container mx-auto px-6">
                {/* Section Header */}
                <h2 className="text-center text-[28px] md:text-5xl font-serif text-gray-800 leading-[1.6] mb-12 md:mb-20 tracking-widest font-bold">
                    ジルコニアベニアの
                    <br />
                    メリット
                </h2>

                {/* Bubble Cloud Layout - Closer to the reference image */}
                <div className="relative max-w-[500px] mx-auto min-h-[550px] md:min-h-[600px]">
                    {/* Row 1: Left & Right */}
                    <div className="flex justify-between px-2 md:px-0">
                        <Bubble item={merits[0]} size="w-36 h-36 md:w-44 md:h-44" className="z-10 bg-cyan-50/70" />
                        <Bubble item={merits[1]} size="w-36 h-36 md:w-44 md:h-44" className="z-10 mt-8 bg-cyan-50/70" />
                    </div>

                    {/* Row 2: Center (Overlaps slightly) */}
                    <div className="flex justify-center -mt-10">
                        <Bubble item={merits[2]} size="w-36 h-36 md:w-44 md:h-44" className="z-20 shadow-xl bg-cyan-50/80" />
                    </div>

                    {/* Row 3: Left & Right */}
                    <div className="flex justify-between px-2 md:px-0 -mt-10">
                        <Bubble item={merits[3]} size="w-36 h-36 md:w-44 md:h-44" className="z-10 bg-cyan-50/70" />
                        <Bubble item={merits[4]} size="w-36 h-36 md:w-44 md:h-44" className="z-10 mt-8 bg-cyan-50/70" />
                    </div>

                    {/* Row 4: Center */}
                    <div className="flex justify-center -mt-10">
                        <Bubble item={merits[5]} size="w-36 h-36 md:w-44 md:h-44" className="z-20 bg-cyan-50/80" />
                    </div>

                    {/* Sparkle Decorations */}
                    <div className="absolute top-1/4 -left-4 md:-left-10 text-gold/40 animate-pulse">
                        <Sparkles className="w-10 h-10" />
                    </div>
                    <div className="absolute bottom-1/3 -right-4 md:-right-10 text-gold/40 animate-pulse" style={{ animationDelay: '1.5s' }}>
                        <Sparkles className="w-8 h-8 rotate-12" />
                    </div>
                </div>

                {/* Bottom Message */}
                <div className="mt-20 text-center space-y-4">
                    <p className="text-xl md:text-2xl font-bold text-gray-800">
                        あなたの笑顔に、<span className="text-labriller-blue text-2xl md:text-3xl">自信と輝き</span>を。
                    </p>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900">
                        今すぐ、<span className="text-labriller-blue text-3xl md:text-4xl">&ldquo;削らない選択&rdquo;</span>を。
                    </p>
                    <p className="text-base md:text-lg font-bold text-gray-800 mt-6 tracking-[0.2em]">
                        ラブリエで始める新しい審美ケア
                    </p>
                </div>
            </div>

            {/* Background Sparkles */}
            <div className="absolute bottom-20 left-10 opacity-20 transform -rotate-12">
                <Sparkles className="w-16 h-16 text-gold" />
            </div>
            <div className="absolute top-20 right-10 opacity-20 transform rotate-45">
                <Sparkles className="w-12 h-12 text-gold" />
            </div>
        </section>
    );
};

// Internal Bubble Component
const Bubble = ({ item, size, className }: { item: any, size: string, className?: string }) => {
    return (
        <div
            className={`
                ${size} ${className}
                relative flex flex-col items-center justify-center rounded-full
                border border-white/60 shadow-[0_12px_40px_rgba(180,225,255,0.25)]
                backdrop-blur-[3px] p-4 text-center
                transition-all duration-700 hover:scale-105 hover:bg-white/90
            `}
        >
            {/* Merit numbering with cursive feel */}
            <span
                className="absolute top-6 left-1/2 -translate-x-1/2 text-[18px] md:text-[20px] text-[#FF6EB4]/90"
                style={{
                    fontFamily: "'Brush Script MT', cursive",
                    fontStyle: 'italic'
                }}
            >
                Merit {item.id}
            </span>

            <p className="text-[15px] md:text-[18px] font-bold text-labriller-blue leading-tight mt-6">
                {item.title}
            </p>
        </div>
    );
};


