"use client";

import React, { useEffect, useRef } from "react";
import "./gallery.css";

export const ClinicGallery = () => {
    const galleryRef = useRef<any>(null);

    useEffect(() => {
        // Load the vanilla JS Web Component only on the client
        import("@/lib/gallery.js").then(() => {
            if (galleryRef.current) {
                // Wait a tiny bit for the component upgrade just in case
                setTimeout(() => {
                    if (galleryRef.current) {
                        galleryRef.current.images = [
                            { src: "/assets/images/clinic/受付.png", alt: "受付" },
                            { src: "/assets/images/clinic/待合スペース.png", alt: "待合スペース" },
                            { src: "/assets/images/clinic/診療室.png", alt: "診療室" },
                            { src: "/assets/images/clinic/医科診察室.png", alt: "医科診察室" },
                            { src: "/assets/images/clinic/スロープ.png", alt: "スロープ" }
                        ];
                    }
                }, 100);
            }
        });

        // Cleanup the body-appended lightbox upon unmount
        return () => {
            const lightbox = document.getElementById("antigravity-lightbox-overlay");
            if (lightbox) lightbox.remove();
        };
    }, []);

    return (
        <section className="py-20 md:py-32 bg-[#F9F9FB] overflow-hidden border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-5xl mb-12 text-center">
                <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">Clinic Tour</p>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6">世界基準のプライベート空間</h2>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
                    完全個室のVIPルームで、プライバシーに配慮したリラックスできる時間を提供します。<br className="hidden md:block" />
                    表参道という立地で、最上級のホスピタリティをご体感ください。
                </p>
            </div>

            {/* Gallery Wrapper */}
            <div className="w-full relative py-4">
                {/* @ts-ignore */}
                <antigravity-gallery ref={galleryRef} auto-speed="0.8"></antigravity-gallery>
            </div>
        </section>
    );
};
