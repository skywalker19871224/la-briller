import React from 'react';
import { Phone, Mail, Calendar, MessageCircle } from "lucide-react";

export const FloatingCTA = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-[60] flex h-[56px] md:h-[70px] shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
            <a
                href="tel:03-6452-6035"
                className="flex-1 bg-[#2F5672] text-white flex flex-col items-center justify-center transition-opacity hover:opacity-90"
            >
                <Phone className="w-5 h-5 mb-0.5 md:mb-1" />
                <span className="text-[10px] md:text-[11px] tracking-tighter">お電話</span>
            </a>
            <a
                href="https://parfait-clinic.com/contact/"
                className="flex-1 bg-[#333333] text-white flex flex-col items-center justify-center transition-opacity hover:opacity-90 border-l border-white/10"
            >
                <Mail className="w-5 h-5 mb-0.5 md:mb-1" />
                <span className="text-[10px] md:text-[11px] tracking-tighter">お問い合わせ</span>
            </a>
            <a
                href="https://reserve.dental/web/5c572e-743/home"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#C8461F] text-white flex flex-col items-center justify-center transition-opacity hover:opacity-90 border-l border-white/10"
            >
                <Calendar className="w-5 h-5 mb-0.5 md:mb-1" />
                <span className="text-[10px] md:text-[11px] tracking-tighter">Web診療予約</span>
            </a>
            <a
                href="https://parfait-clinic.com/line-friends/"
                className="flex-1 bg-[#3CB34A] text-white flex flex-col items-center justify-center transition-opacity hover:opacity-90 border-l border-white/10"
            >
                <MessageCircle className="w-5 h-5 mb-0.5 md:mb-1" />
                <span className="text-[10px] md:text-[11px] tracking-tighter">LINE診療予約</span>
            </a>
        </div>
    );
};
