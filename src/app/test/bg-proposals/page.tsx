"use client";

import { useState, useEffect } from "react";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { PricingTable } from "@/components/sections/PricingTable";
import { Flow } from "@/components/sections/Flow";
import { QA } from "@/components/sections/QA";

type Variant = "1" | "2" | "3" | "4" | "5";

export default function BackgroundVariantsTest() {
  const [variant, setVariant] = useState<Variant>("5");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderSection = (id: string, Component: any) => {
    let containerClass = "relative transition-all duration-700 ";
    let innerClass = "relative z-10 ";
    let bgDecoration = null;

    // 案1: ラグジュアリー・ダーク
    if (variant === "1") {
      containerClass += "bg-[#0A0F1D] text-white";
    }

    // 案2: プレミアム・マーブル
    if (variant === "2") {
      containerClass += "bg-[#F7F9FC]";
      bgDecoration = (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.15]" 
               style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}></div>
          <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-parfait-blue/15 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-[50%] h-[80%] bg-gradient-to-tr from-gold/10 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-10 w-[1px] h-full bg-gold/20"></div>
        </div>
      );
    }

    // 案3: アシンメトリー・カラー
    if (variant === "3") {
      containerClass += "bg-white overflow-hidden";
      bgDecoration = (
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-parfait-blue/5 skew-x-[-12deg] origin-top translate-x-20"></div>
           <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gold/5 skew-x-[15deg] origin-bottom -translate-x-10"></div>
        </div>
      );
    }

    // 案4: ディープ・オーブ
    if (variant === "4") {
      containerClass += "bg-[#0F172A] overflow-hidden";
      bgDecoration = (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-parfait-blue/40 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-gold/30 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      );
    }

    // 案5: Dynamic Fluid (User Proposal - 基本白、ゆっくり動くグラデ)
    if (variant === "5") {
      containerClass += "bg-white";
    }

    return (
      <div className={containerClass} id={id}>
        {bgDecoration}
        <div className={innerClass}>
          <div className={`${(variant === "1" || variant === "4") ? "dark-mode-override" : ""}`}>
            <Component />
          </div>
        </div>
        
        <style jsx>{`
          .dark-mode-override :global(p), 
          .dark-mode-override :global(span:not(.bg-parfait-blue)),
          .dark-mode-override :global(h2),
          .dark-mode-override :global(h3) {
            color: ${(variant === "1" || variant === "4") ? "#F8FAFC !important" : "inherit"};
          }
          .dark-mode-override :global(.text-gray-600) {
            color: #94A3B8 !important;
          }
        `}</style>
      </div>
    );
  };

  return (
    <main className="min-h-screen">
      {/* 案5用の動く背景オーブ (Variant 5の時のみ表示) */}
      {variant === "5" && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
          <div 
            className="absolute rounded-full bg-parfait-blue/20 blur-[120px] w-[60vw] h-[60vw] transition-transform duration-1000 ease-out"
            style={{ 
              transform: `translate(${20 + scrollY * 0.05}vw, ${-10 + scrollY * 0.02}vh)`,
              opacity: 0.6
            }}
          />
          <div 
            className="absolute rounded-full bg-gold/10 blur-[140px] w-[50vw] h-[50vw] transition-transform duration-1000 ease-out"
            style={{ 
              transform: `translate(${-20 + scrollY * -0.03}vw, ${20 + scrollY * 0.05}vh)`,
              opacity: 0.4
            }}
          />
        </div>
      )}

      {/* Selector UI */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] bg-black/90 backdrop-blur-xl border border-white/20 p-1.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex gap-2">
        {(["1", "2", "3", "4", "5"] as Variant[]).map((v) => (
          <button
            key={v}
            onClick={() => setVariant(v)}
            className={`px-5 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all ${
              variant === v
                ? "bg-white text-black scale-105 shadow-white/30"
                : "text-white/50 hover:text-white hover:bg-white/10"
            }`}
          >
            案{v} <br/>
            {v === "1" && "Dark"}
            {v === "2" && "Marble"}
            {v === "3" && "Skew"}
            {v === "4" && "Deep"}
            {v === "5" && "Fluid"}
          </button>
        ))}
      </div>

      <div className={variant === "1" || variant === "4" ? "bg-black" : "bg-transparent"}>
        <div className="pt-32 pb-16 text-center">
          <h1 className={`text-4xl font-black italic tracking-tighter mb-4 ${variant === "1" || variant === "4" ? "text-white" : "text-black"}`}>
            VISUAL PROPOSALS
          </h1>
          <div className={`mx-auto w-24 h-1 mb-4 ${variant === "1" || variant === "4" ? "bg-white" : "bg-black"}`}></div>
        </div>

        {renderSection("cases", CaseStudies)}
        <div className="h-24"></div>
        {renderSection("pricing", PricingTable)}
        <div className="h-24"></div>
        {renderSection("flow", Flow)}
        <div className="h-24"></div>
        {renderSection("qa", QA)}

        <div className="py-32 text-center text-[10px] font-bold tracking-widest uppercase opacity-20">
          End of Preview
        </div>
      </div>

      <style jsx global>{`
        section { background-color: transparent !important; }
        body { margin: 0; }
      `}</style>
    </main>
  );
}
