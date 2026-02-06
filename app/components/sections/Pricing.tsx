import { Card, CardBody } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "IT顧問",
    price: "月30万円〜",
    desc: "社内IT担当の代替として、課題整理と意思決定を支援。",
    points: ["業務整理 / 相談窓口", "ツール選定・導入支援", "開発計画・優先順位整理"],
  },
  {
    name: "MVP開発",
    price: "300万円〜",
    desc: "最小の形で早くリリース。使いながら改善します。",
    points: ["要件整理〜設計", "Web/アプリ開発", "短期リリース（目安2〜8週）"],
  },
  {
    name: "運用・継続開発",
    price: "月10万円〜",
    desc: "改善や追加開発を月額で回すプラン（上限時間つき推奨）。",
    points: ["機能追加・UI改善", "運用サポート", "定例/改善サイクル"],
  },
];

export function Pricing() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {plans.map((p, idx) => (
        <Card
          key={p.name}
          className={`transition hover:border-zinc-300 ${
            idx === 1 ? "ring-1 ring-black/10" : ""
          }`}
        >
          <CardBody>
            <h3 className="text-base font-semibold">{p.name}</h3>
            <p className="mt-2 text-2xl font-semibold tracking-tight">{p.price}</p>
            <p className="mt-3 text-sm leading-7 text-zinc-600">{p.desc}</p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-700">
              {p.points.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="#contact" variant={idx === 1 ? "primary" : "secondary"}>
                相談する
              </Button>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
