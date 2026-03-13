"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { useEffect, useRef, useState } from "react";

const steps = [
    {
        number: "01",
        visit: "初回",
        title: "カウンセリング・精密診査",
        description:
            "お悩みや理想の口元をお伺いし、ラブリエが適応可能か精密な診査を行います。治療計画と料金を明確にご提示します。",
    },
    {
        number: "02",
        visit: "初回",
        title: "型取り・色決め",
        description:
            "現在の歯型を採取し、作製するラブリエチップの色（白さ）や最終的な形を相談して決定します。必要に応じてわずかに歯の表面を整える場合があります。",
    },
    {
        number: "03",
        visit: "2回目",
        title: "装着（セット）",
        description:
            "完成したラブリエチップを歯の表面に専用の強力な接着剤で確実に装着します。",
    },
    {
        number: "04",
        visit: "最終",
        title: "確認・完了",
        description:
            "噛み合わせや見た目の最終チェックを行い、ご自宅でのケア方法をご説明して治療完了です。",
    },
];

const StepCard = ({
    step,
    index,
    isLast,
}: {
    step: (typeof steps)[0];
    index: number;
    isLast: boolean;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setVisible(true), index * 150);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [index]);

    const isEven = index % 2 === 0;

    return (
        <div
            ref={ref}
            className="relative"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
        >
            {/* Step Card */}
            <div
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    isEven ? "" : "md:flex-row-reverse"
                }`}
            >
                {/* Step Number — Hero Element */}
                <div className="relative shrink-0 w-48 md:w-64 text-center">
                    {/* 来院バッジ — 上部に浮かぶ */}
                    <span className="inline-block bg-[#8E81AC]/15 text-[#8E81AC] text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-2">
                        {step.visit}
                    </span>

                    {/* Step + 番号 = 画像の再現 */}
                    <div className="font-serif leading-none text-[#8E81AC]/20 select-none flex items-baseline justify-center tracking-tighter">
                        <span className="text-4xl md:text-5xl italic mr-0.5">
                            Step
                        </span>
                        <span className="text-8xl md:text-9xl">{step.number}</span>
                    </div>
                </div>

                {/* Content — カードスタイル */}
                <div className="flex-1 max-w-lg">
                    {/* 装飾ライン */}
                    <div
                        className={`w-16 h-[2px] bg-gradient-to-r from-[#8E81AC]/40 to-transparent mb-5 ${
                            isEven ? "" : "md:ml-auto md:bg-gradient-to-l"
                        }`}
                    />
                    <h3
                        className={`text-xl md:text-2xl font-bold text-[#1A2530] mb-3 tracking-wide leading-snug ${
                            isEven ? "" : "md:text-right"
                        }`}
                    >
                        {step.title}
                    </h3>
                    <p
                        className={`text-sm md:text-base text-gray-500 leading-[1.9] ${
                            isEven ? "" : "md:text-right"
                        }`}
                    >
                        {step.description}
                    </p>
                </div>
            </div>

            {/* Connector — ステップ間の細い縦線 */}
            {!isLast && (
                <div className="flex justify-center my-8 md:my-12">
                    <div className="w-px h-16 bg-gradient-to-b from-[#8E81AC]/20 via-[#8E81AC]/10 to-transparent" />
                </div>
            )}
        </div>
    );
};

export const FlowV2 = () => {
    return (
        <section className="bg-[#FAFBFD] py-20 md:py-28 overflow-hidden">
            {/* Section Header */}
            <SectionHeader
                en="Treatment Flow"
                ja="治療の流れ"
                theme="light"
                className="mb-16 md:mb-24"
            />

            {/* 最初の要素の上に大きなアクセントテキスト */}
            <div className="container mx-auto px-6 max-w-4xl relative">
                {/* 背景装飾 — 非常に薄い大きなテキスト */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 font-serif text-[#8E81AC]/[0.04] text-[12rem] md:text-[18rem] select-none pointer-events-none leading-none tracking-tight whitespace-nowrap"
                    aria-hidden="true"
                >
                    Flow
                </div>

                {/* Steps */}
                <div className="relative z-10">
                    {steps.map((step, index) => (
                        <StepCard
                            key={step.number}
                            step={step}
                            index={index}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>

                {/* Bottom Message */}
                <div className="mt-20 md:mt-28 text-center">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#8E81AC]/30 to-transparent mx-auto mb-8" />
                    <p className="text-sm md:text-base text-gray-400 tracking-[0.3em] font-serif italic">
                        ── わずか 2回の通院で、新しい笑顔へ ──
                    </p>
                </div>
            </div>
        </section>
    );
};
