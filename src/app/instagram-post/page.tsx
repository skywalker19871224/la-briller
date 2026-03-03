"use client";

import React, { useState, Suspense } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, ChevronLeft, Check } from "lucide-react";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function InstagramPostContent() {
    const searchParams = useSearchParams();
    const src = searchParams.get('src') || "/assets/ig/post1.png";
    const type = searchParams.get('type') || "image";

    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-0 md:py-12">

            {/* Nav Back (Mocking mobile browser header) */}
            <div className="w-full max-w-[470px] bg-white border-b border-gray-200 h-12 flex items-center px-4 sticky top-0 z-50">
                <Link href="/" className="mr-4">
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                </Link>
                <h1 className="text-base font-semibold text-gray-800 flex-1 text-center pr-10">投稿</h1>
            </div>

            {/* Main IG Post Card */}
            <div className="w-full max-w-[470px] bg-white border-x border-b border-gray-200 animate-in fade-in zoom-in-95 duration-500">

                {/* Post Header */}
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[1.5px] mr-3">
                            <div className="w-full h-full rounded-full bg-white p-[1px]">
                                <img
                                    src="https://parfait-clinic.com/wp-content/uploads/2023/08/prfaitclinic_logo_h.png"
                                    alt="User Profile"
                                    className="w-full h-full rounded-full object-contain"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-1">
                                <span className="text-sm font-semibold text-gray-900">parfait_clinic_labriller</span>
                                <div className="bg-blue-500 rounded-full p-[1px]">
                                    <Check className="w-2 h-2 text-white stroke-[4]" />
                                </div>
                            </div>
                            <p className="text-[11px] text-gray-500">東京都 港区 北青山</p>
                        </div>
                    </div>
                    <button className="text-gray-800">
                        <MoreHorizontal className="w-5 h-5" />
                    </button>
                </div>

                {/* Post Image/Video */}
                <div className="relative aspect-square w-full bg-gray-100 overflow-hidden group">
                    {type === 'video' ? (
                        <video
                            src={src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <img
                            src={src}
                            alt="Instagram Post"
                            className="w-full h-full object-cover"
                        />
                    )}

                    {/* Double Tap Heart Animation (Simplified) */}
                    {liked && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-ping opacity-0">
                            <Heart className="w-24 h-24 text-white fill-white" />
                        </div>
                    )}
                </div>

                {/* Interaction Bar */}
                <div className="p-3">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-4">
                            <button onClick={() => setLiked(!liked)}>
                                <Heart className={`w-6 h-6 transition-colors ${liked ? "text-red-500 fill-red-500 scale-110" : "text-gray-800 hover:text-gray-500"}`} />
                            </button>
                            <button className="text-gray-800 hover:text-gray-500">
                                <MessageCircle className="w-6 h-6" />
                            </button>
                            <button className="text-gray-800 hover:text-gray-500">
                                <Send className="w-6 h-6" />
                            </button>
                        </div>
                        <button onClick={() => setBookmarked(!bookmarked)}>
                            <Bookmark className={`w-6 h-6 transition-colors ${bookmarked ? "text-gray-800 fill-gray-800" : "text-gray-800 hover:text-gray-500"}`} />
                        </button>
                    </div>

                    {/* Likes Count */}
                    <div className="mb-2">
                        <p className="text-sm font-semibold text-gray-900">「いいね！」1,248件</p>
                    </div>

                    {/* Caption */}
                    <div className="space-y-1">
                        <p className="text-sm leading-relaxed text-gray-900">
                            <span className="font-semibold mr-2">parfait_clinic_labriller</span>
                            【0.04mmの衝撃】<br />
                            もはや、存在を感じさせない極限の薄さ。<br /><br />
                            La Brillerが実現した世界初・0.04mmのジルコニアベニアは、花びらに乗せても重さを感じさせないほどの軽量さと、天然歯を凌駕する透明感を両立しています。<br /><br />
                            「歯を削りたくない」という、美しさと健康の両方を求めるセレブリティの皆様へ贈る、究極の選択肢です。
                        </p>
                        <p className="text-sm text-blue-900">
                            #パルフェクリニック #LaBriller #審美歯科 #ジルコニアベニア #表参道歯科 #削らない歯科治療 #セレブリティ品質
                        </p>
                    </div>

                    {/* Comments Toggle */}
                    <button className="text-sm text-gray-500 mt-2 hover:text-gray-400">
                        コメント24件をすべて見る
                    </button>

                    {/* Timestamp */}
                    <p className="text-[10px] text-gray-400 uppercase mt-2 tracking-tighter">
                        2026年3月3日
                    </p>
                </div>

                {/* Add Comment Section (Mock) */}
                <div className="p-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center flex-1">
                        <span className="text-lg mr-3">😊</span>
                        <input
                            type="text"
                            placeholder="コメントを追加..."
                            className="text-sm border-none focus:ring-0 w-full placeholder-gray-400"
                            readOnly
                        />
                    </div>
                    <button className="text-blue-500 font-semibold text-sm opacity-50 cursor-default">
                        投稿する
                    </button>
                </div>
            </div>

            {/* Context Footer (Mocking Suggestions) */}
            <div className="w-full max-w-[470px] mt-8 px-4 hidden md:block">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-gray-500">おすすめの投稿</p>
                    <button className="text-xs font-semibold text-blue-500">すべて見る</button>
                </div>
                <div className="grid grid-cols-3 gap-1 overflow-hidden rounded-sm">
                    <div className="aspect-square bg-gray-200"></div>
                    <div className="aspect-square bg-gray-300"></div>
                    <div className="aspect-square bg-gray-400"></div>
                </div>
            </div>

            {/* Back to LP Button */}
            <div className="mt-12 mb-20">
                <Link href="/">
                    <button className="px-8 py-3 bg-parfait-blue text-white rounded-full text-sm font-medium shadow-md hover:bg-parfait-blue/90 transition-all hover:scale-105">
                        ランディングページへ戻る
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default function InstagramPostPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-400">Loading...</div>}>
            <InstagramPostContent />
        </Suspense>
    );
}

