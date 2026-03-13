"use client";

import React from "react";

export const WhatIsLabriller = () => {
  return (
    <section className="bg-parfait-bg-light py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        {/* Main Copies */}
        <div className="mb-12 space-y-4">
          <p className="text-lg md:text-2xl font-medium tracking-wider text-slate-700">
            貼るだけで理想の口元を叶える
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#C8461F]">
            世界最薄ジルコニアベニア
          </h2>
        </div>

        {/* Minimal Divider */}
        <div className="flex justify-center mb-12">
          <div className="w-20 h-[2px] bg-white rounded-full opacity-80" />
        </div>

        {/* Detailed Description */}
        <div className="max-w-3xl mx-auto">
          <div className="text-gray-700 leading-loose md:leading-[2.2] text-left md:text-center space-y-6">
            <p className="text-base md:text-lg">
              LaBriller(ラブリエ)は、白く美しいセラミックのベニアを、付け爪をするように歯の表面に貼り付け、歯の形や色をキレイに見せることができる審美歯科治療法です。
            </p>
            <p className="text-base md:text-lg">
              歯を一切削らず、強度に優れた極薄のセラミックを歯の表面に貼り付けることで、歯の見た目のお悩みを気軽に解決することができます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
