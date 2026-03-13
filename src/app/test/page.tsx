"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Edit2, Check, RotateCcw, Copy, ExternalLink } from "lucide-react";

// デフォルト設定
const DEFAULT_SECTIONS = [
  { id: "helo", name: "hero = ヒーローセクション", note: "最新のキャッチコピーとグラスモルフィズムボタン" },
  { id: "brand-message", name: "brand-message = ブランドメッセージ", note: "両ブランドの信頼性を伝えるミニマルなメッセージ" },
  { id: "what-is-labriller", name: "what-is-labriller = ラブリエとは", note: "赤字の強調コピー「世界最薄ジルコニアベニア」" },
  { id: "comparison-table", name: "comparison-table = 症例比較表", note: "他治療との比較テーブル（新規追加）" },
  { id: "flow", name: "flow = 治療の流れ", note: "ステップ1〜の流れ（新規追加）" },
  { id: "merits", name: "merits = ラブリエのメリット", note: "ジルコニアベニアの強度や削らない利点" },
  { id: "instagram", name: "instagram = 症例写真", note: "Instagramと連動した症例グリッド" },
  { id: "qa", name: "qa = よくある質問", note: "「ラブリエ」専用のQ&A（更新済み）" },
  { id: "clinic-gallery", name: "clinic-gallery = クリニックギャラリー", note: "院内風景のオートスルーギャラリー" },
  { id: "access", name: "access = アクセス・医院案内", note: "アイシーブルーの背景と地図・診療時間" },
];

export default function TestIndex() {
    const [sections, setSections] = useState(DEFAULT_SECTIONS);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    // マウント時にLocalStorageから読み込み
    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("labriller-sections-v2");
        if (saved) {
            try {
                setSections(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load sections", e);
            }
        }
    }, []);

    const saveToLocal = (newSections: typeof sections) => {
        setSections(newSections);
        localStorage.setItem("labriller-sections-v2", JSON.stringify(newSections));
    };

    const handleRename = (id: string, newName: string) => {
        const updated = sections.map(s => s.id === id ? { ...s, name: newName } : s);
        saveToLocal(updated);
    };

    const resetDefaults = () => {
        if (confirm("初期設定に戻しますか？")) {
            saveToLocal(DEFAULT_SECTIONS);
        }
    };

    const copyFinalConfig = () => {
        const code = `const sections = ${JSON.stringify(sections, null, 2)};`;
        navigator.clipboard.writeText(code);
        alert("設定をコピーしました！Antigravityのチャットに貼り付けて「これを反映して」と送ってください。");
    };

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-12 font-sans text-slate-900 selection:bg-blue-100">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-8 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                             <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white text-sm font-black italic">L</span>
                             </div>
                             <h1 className="text-3xl font-black tracking-tighter italic">Developer Index</h1>
                        </div>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Section Management & Preview Portal</p>
                    </div>
                    <div className="flex gap-3">
                        <button 
                            onClick={resetDefaults}
                            className="p-3 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all"
                            title="リセット"
                        >
                            <RotateCcw size={18} />
                        </button>
                        <button 
                            onClick={copyFinalConfig}
                            className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl text-xs font-black hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0"
                        >
                            <Copy size={14} />
                            現在の設定をコピー
                        </button>
                    </div>
                </header>

                <nav className="space-y-6">
                    <div className="flex justify-between items-center px-2">
                        <Link 
                            href="/" 
                            className="text-[10px] font-black text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2 uppercase tracking-[0.3em]"
                        >
                            <ExternalLink size={12} />
                            View Full Site
                        </Link>
                        <span className="text-[10px] text-slate-300 font-mono font-bold">
                            SYNCED TO LOCAL STORAGE
                        </span>
                    </div>

                    <div className="grid gap-4">
                        {sections.map((section) => (
                            <div 
                                key={section.id} 
                                className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            {editingId === section.id ? (
                                                <div className="flex items-center gap-2 w-full max-w-xl">
                                                    <input 
                                                        autoFocus
                                                        className="text-xl font-black text-slate-800 border-b-2 border-blue-500 bg-blue-50/30 px-3 py-2 outline-none w-full rounded-t-lg"
                                                        value={section.name}
                                                        onChange={(e) => handleRename(section.id, e.target.value)}
                                                        onBlur={() => setEditingId(null)}
                                                        onKeyDown={(e) => e.key === 'Enter' && setEditingId(null)}
                                                    />
                                                    <button onClick={() => setEditingId(null)} className="p-2 bg-blue-500 text-white rounded-lg shadow-md">
                                                        <Check size={18} />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-3 group/title cursor-pointer" onClick={() => setEditingId(section.id)}>
                                                    <h2 className="text-xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">
                                                        {section.name}
                                                    </h2>
                                                    <Edit2 size={14} className="text-slate-200 group-hover/title:text-blue-400 transition-all translate-x-1 opacity-0 group-hover/title:opacity-100 group-hover/title:translate-x-0" />
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-[9px] font-black tracking-widest bg-slate-100 text-slate-400 px-2 py-1 rounded-md uppercase">
                                                ID: {section.id}
                                            </span>
                                            <div className="h-1 w-1 rounded-full bg-slate-200" />
                                            <span className="text-[9px] font-black tracking-widest text-slate-300 uppercase">
                                                Path: /test/{section.id}
                                            </span>
                                        </div>

                                        <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-2xl">
                                            {section.note}
                                        </p>
                                    </div>

                                    <div className="shrink-0">
                                        <Link 
                                            href={`/test/${section.id}`}
                                            className="inline-flex items-center justify-center bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-900 px-8 py-4 rounded-2xl text-[10px] font-black transition-all border border-slate-100 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-200 group/btn tracking-[0.2em] uppercase"
                                        >
                                            Preview
                                            <ExternalLink size={12} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </nav>

                <footer className="mt-24 pt-12 border-t border-slate-100 text-center">
                    <p className="text-[10px] text-slate-200 font-black tracking-[0.5em] uppercase">
                        Labriller Dev Environment v2.0
                    </p>
                </footer>
            </div>
        </div>
    );
}
