export type FlowStep = {
  number: string;
  visit: string;
  title: string;
  description: string;
};

export const flowSteps: FlowStep[] = [
  {
    number: "01",
    visit: "初回",
    title: "カウンセリング・精密診査",
    description:
      "お悩みや理想の口元をお伺いし、ラブリエが適応可能か精密な診査を行います。治療計画と料金を明確にご提示します。",
  },
  {
    number: "02",
    visit: "初回",
    title: "型取り・色決め",
    description:
      "現在の歯型を採取し、作製するラブリエチップの色（白さ）や最終的な形を相談して決定します。必要に応じてわずかに歯の表面を整える場合があります。",
  },
  {
    number: "03",
    visit: "2回目",
    title: "装着（セット）",
    description:
      "完成したラブリエチップを歯の表面に専用の強力な接着剤で確実に装着します。",
  },
  {
    number: "04",
    visit: "最終",
    title: "確認・完了",
    description:
      "噛み合わせや見た目の最終チェックを行い、ご自宅でのケア方法をご説明して治療完了です。",
  },
];
