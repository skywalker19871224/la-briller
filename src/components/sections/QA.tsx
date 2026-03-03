"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from "@/lib/utils";

const qaData = [
    {
        question: "保証はありますか？",
        answer: "はい、装着日より2年間の保証になります。※クリニックの方針により異なる場合がございます。詳細はクリニックにお問合せください。"
    },
    {
        question: "副作用はありますか？",
        answer: "特にありません。安全性が高く、耐久性にも優れているジルコニアセラミックを使用しています。"
    },
    {
        question: "治療期間はどれくらいですか？",
        answer: "歯の治療や歯茎の治療など他の治療がない場合、通常通院回数は2回です。\n- ①通院１回目：スキャン〜ベニア制作〜\n- ②通院２回目：貼り付け\n※歯の状態やクリニックの治療方針により異なりますので、詳しくは担当医師にご相談ください。"
    },
    {
        question: "色は選べますか？",
        answer: "はい、お選びいただけます。自然な色～美白等、色見本がありますので、カウンセリング時にご相談ください。"
    },
    {
        question: "クラウン（被せ物/差し歯）の上でも治療できますか？",
        answer: "材質や形状により異なります。治療可能な場合でも、天然歯に比べ外れるリスクがあります。詳細に関しては、医師にご相談ください。"
    },
    {
        question: "どこで対応しているのでしょうか？",
        answer: "全国の提携クリニックで治療できます。まずはご相談ください。\n※ LaBriller治療に関する詳細は、担当の医師にご確認・ご相談ください。"
    }
];

export const QA = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white">
            {/* Title Band: BrandMessageと対になる水色の帯 */}
            <div className="bg-parfait-blue py-10 text-center text-white">
                <div className="container mx-auto px-6">
                    <p className="text-[10px] tracking-[0.5em] uppercase text-white/60 mb-2">Support</p>
                    <h2 className="text-3xl md:text-4xl font-serif tracking-wider">よくある質問</h2>
                </div>
            </div>

            <div className="py-12 container mx-auto px-6 max-w-4xl">

                <div className="space-y-0">
                    {qaData.map((item, index) => (
                        <div key={index} className="border-b border-gray-100">
                            <button
                                onClick={() => toggleOpen(index)}
                                className="w-full py-4 flex items-center justify-between text-left group"
                            >
                                <span className="text-base font-medium text-gray-900 group-hover:text-parfait-blue transition-colors">
                                    <span className="text-parfait-blue mr-3 font-serif italic text-lg">Q.</span>
                                    {item.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-parfait-blue" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-parfait-blue" />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300 ease-in-out",
                                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                                )}
                            >
                                <div className="flex gap-4">
                                    <span className="text-gold font-serif italic text-xl shrink-0">A.</span>
                                    <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
