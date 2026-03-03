import React from 'react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-parfait-blue py-12 text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8 text-sm">
                    <Link href="https://parfait-clinic.com/risk/" className="hover:opacity-80 transition-opacity">
                        リスクと副作用
                    </Link>
                    <Link href="https://parfait-clinic.com/specification/" className="hover:opacity-80 transition-opacity">
                        薬機法において承認されていない医療機器
                    </Link>
                    <Link href="https://parfait-clinic.com/policy/" className="hover:opacity-80 transition-opacity">
                        プライバシーポリシー
                    </Link>
                </div>
                <div className="text-center text-xs opacity-90">
                    <p>Copyright © パルフェクリニック・医科歯科 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
