"use client";
import React, { useEffect, useRef, useState } from 'react';

const LINES = [
    { top: '18%', speed: 1.3 },
    { top: '38%', speed: 0.7 },
    { top: '57%', speed: 1.0 },
    { top: '76%', speed: 0.5 },
];

export const BrandMessage = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const total = window.innerHeight + rect.height;
            const p = (window.innerHeight - rect.top) / total;
            setProgress(Math.max(0, Math.min(1, p)));
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-10 md:py-24 bg-parfait-blue text-white text-center overflow-hidden"
        >
            {/* Scroll-driven flowing lines */}
            <div className="absolute inset-0 pointer-events-none">
                {LINES.map((line, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            top: line.top,
                            left: 0,
                            height: '1px',
                            width: '55%',
                            background:
                                'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), rgba(255,255,255,0.55), rgba(255,255,255,0.2), transparent)',
                            transform: `translateX(${-60 + progress * 220 * line.speed}%) skewX(-12deg)`,
                            willChange: 'transform',
                            opacity: 0.5 + progress * 0.5,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <p className="font-serif text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12 tracking-wider leading-[1.8]">
                    貼るだけで<br />理想の口元を叶える
                </p>
                <div className="flex justify-center items-center gap-6 md:gap-12 text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-white/80">
                    <span className="whitespace-nowrap">Parfait Clinic</span>
                    <span className="text-white/50">×</span>
                    <span className="whitespace-nowrap">La Briller</span>
                </div>
            </div>
        </section>
    );
};
