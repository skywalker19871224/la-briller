import React from 'react';

export const BrandMessage = () => {
    return (
        <section className="py-24 bg-parfait-blue text-white text-center">
            {/* 復元メモ: デフォルト背景は bg-[#1A1A1A] */}
            <div className="container mx-auto px-6">
                <p className="font-serif text-3xl mb-12 tracking-wider">美しさは、確かな信頼から生まれる。</p>
                <div className="flex justify-center space-x-12 text-xs tracking-[0.5em] uppercase text-white/80">
                    <span>Parfait Clinic</span>
                    <span className="text-white/50">×</span>
                    <span>La Briller</span>
                </div>
            </div>
        </section>
    );
};
