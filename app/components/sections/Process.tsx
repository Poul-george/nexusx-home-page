const steps = [
  {
    title: "ヒアリング",
    desc: "現状の業務と詰まりポイントを整理します。要件が曖昧でもOKです。",
  },
  {
    title: "改善案の設計",
    desc: "最小の構成で“まず使える”形を定義。優先順位とロードマップを作ります。",
  },
  {
    title: "MVP開発",
    desc: "短期間でリリースし、現場で使いながら改善前提で進めます。",
  },
  {
    title: "運用・改善",
    desc: "定例と改善サイクルで、継続的に成果が出る状態まで育てます。",
  },
];

export function Process() {
  return (
    <ol className="grid gap-4 lg:grid-cols-4">
      {steps.map((s, idx) => (
        <li
          key={s.title}
          className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft"
        >
          <p className="text-xs font-medium tracking-widest text-zinc-500">
            STEP {idx + 1}
          </p>
          <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm leading-7 text-zinc-600">{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}
