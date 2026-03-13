"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import Image from "next/image";

type CaseItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  imageBefore: string;
  imageAfter: string;
  // 写真のフォーカス位置調整 (CSS object-position)
  positionBefore?: string;
  positionAfter?: string;
  // 表示アスペクト比 (CSSのaspect-ratio)
  aspectRatio?: string;
};

const cases: CaseItem[] = [
  {
    id: "case1",
    category: "歯の隙間",
    title: "すきっ歯・ブラックトライアングルの改善",
    description:
      "前歯の目立つ隙間を、歯を削らずにラブリエチップで自然に埋めました。短期間でスマイルラインが整い、口元の印象が大きく変わります。",
    imageBefore: "/images/cases/case1-before.jpg",
    imageAfter: "/images/cases/case1-after.jpg",
    positionBefore: "center 40%",
    positionAfter: "center 40%",
    aspectRatio: "3/2",
  },
  {
    id: "case2",
    category: "歯の色調",
    title: "黄ばみ・変色歯のトーンアップ",
    description:
      "ホワイトニングでは改善が難しい強い黄ばみや変色を、0.04mmの極薄チップでカバー。天然歯のような透明感のある理想の白さを実現しました。",
    imageBefore: "/images/cases/case2-before.jpg",
    imageAfter: "/images/cases/case2-after.jpg",
    positionBefore: "center 45%",
    positionAfter: "center 45%",
    aspectRatio: "3/2",
  },
  {
    id: "case3",
    category: "歯肉の悩み",
    title: "歯肉退縮による隙間の解消",
    description:
      "歯槽膿漏の影響や加齢で広がってしまった歯の根元の隙間を、自歯を削ることなく整えました。健康的で若々しい、自信の持てる笑顔へ導きます。",
    imageBefore: "/images/cases/case3-before.jpg",
    imageAfter: "/images/cases/case3-after.jpg",
    positionBefore: "center center",
    positionAfter: "center center",
    aspectRatio: "3/2",
  },
  {
    id: "case4",
    category: "歯の長さ",
    title: "不揃いな歯並び・スマイルラインの構築",
    description:
      "欠けたり磨り減って短くなった歯の長さを微調整し、左右対称で美しい並びを再現。顔立ちまで華やかに見える理想のボリュームを叶えました。",
    imageBefore: "/images/cases/case4-before.jpg",
    imageAfter: "/images/cases/case4-after.jpg",
    positionBefore: "center 42%",
    positionAfter: "center 42%",
    aspectRatio: "3/2",
  },
];

const CaseCard = ({ item }: { item: CaseItem }) => {
  return (
    <div className="group w-full">
      {/* カテゴリラベル - Pattern 3: Editorial Vertical */}
      <div className="flex items-center gap-3 mb-4 px-1">
        <div className="w-0.5 h-[19px] bg-[#3BADB0]" />
        <span className="text-[17px] font-bold tracking-wider text-[#3BADB0] uppercase leading-none">
          {item.category}
        </span>
      </div>

      {/* Before / After 写真エリア */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
        {/* Before */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-100">
          <div
            className="relative w-full"
            style={{ aspectRatio: item.aspectRatio ?? "3/2" }}
          >
            <Image
              src={item.imageBefore}
              alt={`${item.category} Before`}
              fill
              className="object-cover"
              style={{ objectPosition: item.positionBefore ?? "center" }}
            />
          </div>
          {/* before ラベル - 左端へ移動 */}
          <div className="absolute top-3 left-0 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-r-full">
            <span className="text-white text-[10px] font-bold tracking-widest uppercase">before</span>
          </div>
        </div>

        {/* After */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-100">
          <div
            className="relative w-full"
            style={{ aspectRatio: item.aspectRatio ?? "3/2" }}
          >
            <Image
              src={item.imageAfter}
              alt={`${item.category} After`}
              fill
              className="object-cover"
              style={{ objectPosition: item.positionAfter ?? "center" }}
            />
          </div>
          {/* after ラベル — サイトカラー水色 */}
          <div className="absolute top-3 left-0 flex items-center gap-1.5 bg-[#3BADB0] px-2.5 py-1 rounded-r-full">
            <span className="text-white text-[10px] font-bold tracking-widest uppercase">after</span>
            <span className="text-white/80 text-[9px]">✦</span>
          </div>
        </div>
      </div>

      {/* テキスト説明 */}
      <div className="px-1">
        <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export const CaseStudies = () => {
  return (
    <section className="bg-white" id="cases">
      {/* Title Band — 統一デザイン */}
      <div className="bg-parfait-blue py-10 text-center text-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            en="CASE STUDIES"
            ja="症例紹介"
            theme="dark"
            className="mb-0"
          />
        </div>
      </div>

      {/* Cases Grid */}
      <div className="section-py container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-20">
          {cases.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
