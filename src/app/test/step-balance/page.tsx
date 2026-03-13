"use client";

/**
 * Step番号のバランス比較用プレビュー
 * /test/step-balance でアクセス
 */

const variants = [
    {
        label: "A: 現在（Stepやや小さめ）",
        stepClass: "text-2xl md:text-3xl italic mr-0.5",
        numClass: "text-7xl md:text-8xl",
    },
    {
        label: "B: Step大きめ・番号と近い",
        stepClass: "text-4xl md:text-5xl italic mr-1",
        numClass: "text-7xl md:text-8xl",
    },
    {
        label: "C: Step極小・番号巨大",
        stepClass: "text-lg md:text-xl italic mr-1 tracking-[0.15em]",
        numClass: "text-8xl md:text-9xl",
    },
    {
        label: "D: Step上段・番号下段（縦配置）",
        stepClass: "text-sm md:text-base tracking-[0.25em] uppercase not-italic",
        numClass: "text-7xl md:text-8xl -mt-2",
        vertical: true,
    },
    {
        label: "E: Step同サイズ（均一）",
        stepClass: "text-5xl md:text-6xl italic mr-0",
        numClass: "text-5xl md:text-6xl",
    },
    {
        label: "F: Stepなし・番号のみ巨大",
        stepClass: "hidden",
        numClass: "text-8xl md:text-9xl",
    },
];

export default function StepBalancePreview() {
    return (
        <div className="min-h-screen bg-[#FAFBFD] py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-xl font-bold text-gray-800 mb-2">
                    Step番号バランス比較
                </h1>
                <p className="text-sm text-gray-400 mb-10">
                    お好みのバランスをお伝えください
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {variants.map((v, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col items-center justify-center"
                        >
                            {/* ラベル */}
                            <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-6">
                                {v.label}
                            </p>

                            {/* Step表示 */}
                            <div
                                className={`font-serif leading-none text-[#8E81AC]/30 select-none ${
                                    v.vertical
                                        ? "flex flex-col items-center"
                                        : "flex items-baseline justify-center tracking-tighter"
                                }`}
                            >
                                <span className={v.stepClass}>Step</span>
                                <span className={v.numClass}>01</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
