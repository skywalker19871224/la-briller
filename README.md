# Parfait Clinic x La Briller: Celebrity Collaboration Project

## 🌟 プロジェクト概要
パルフェクリニック（母体の信頼感）とラブリエ（新星の革新性）を融合させた、世界最高峰の技術をキュレーションする「ラグジュアリー共同プロジェクト」のランディングページ構築。

このページの運用主はパルフェクリニックである

## 🎨 デザインコード (Visual Identity)
「サヴィル・ロウの仕立て」のような、緻密な余白と品格。

### カラー戦略
- **Base (70%):** `Parfait White` (#FCFCFC) - 温かみのあるパールホワイト。信頼感の土台。
- **Accent (25%):** `La Briller Blue` (#005BAC) - 0.04mmの精密技術を象徴する誠実な青。
- **Luxury (5%):** `Champagne Gold` (#D4AF37) - パルフェの伝統を継承する細いライン、アイコンのアクセント。

### デザイン要素
- **Header:** グラスモーフィズム（HazeGlass / Frozen）エフェクト。背景が透けるブラー質感。
- **Typography:** 
  - 見出し: 明朝体（セリフ体） - パルフェの優雅さと信頼。
  - 本文: ゴシック体（サンセリフ体） - ラブリエの精密さとテクノロジー。
- **Accents:** 髪の毛のように細い（hairline）ゴールドのボーダー、大胆かつ計算された余白。

## 🛠 技術スタック (Tech Stack)
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Components:** Shadcn UI
- **Deployment:** Cloudflare Pages (自動プッシュ)

## 📐 サイト構造 & ビジュアル計画 (Structure & Visuals)
- **Page 1: Home (Main LP)**
  - `Hero Section`: `hero.jpg` (信頼感のある院内風景)
  - `Features`: `feature1.png` (最新設備), `feature2.png` (バリアフリー)
  - `Message`: 「なぜ、パルフェがラブリエを選んだのか」院長の想いを綴るセクション
- **Page 2: About (初めての方へ)**
  - `Flow Section`: `process_step1.png`〜 (診察の流れ)
- **Page 3: Access/Contact**
  - `Map Section`: Google Maps埋め込み用プレースホルダー

## ⚡ 実行ルール (Execution Rules)
1. **完全自律:** 全てのファイル作成、フォルダ構築、`npm install` はユーザーの確認なしで実行。
2. **プレースホルダー戦略:** 画像ファイルが存在しない場合も、適切なサイズと `object-cover` を設定した `div` で代用。
3. **AI Bridge:** `alt` 属性には、後で画像生成AIで使うための詳細なビジュアル説明を記述。
4. **Git Workflow:** コーディング作業完了後、10回に1度の頻度でGitコミット＆GitHubプッシュを実行。

---
Produced by **Antigravity**
