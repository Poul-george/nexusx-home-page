import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const services = [
  {
    title: "IT顧問 / 伴走コンサル",
    badge: "月額",
    desc: "社内IT担当のような立ち位置で、課題整理・方針決定・ツール選定・ベンダー管理まで支援します。",
    bullets: ["業務整理 / 要件整理", "システム選定・導入支援", "開発計画・優先順位整理"],
  },
  {
    title: "MVP開発（Web/アプリ）",
    badge: "短期",
    desc: "最小の機能で早く使える形を作り、現場フィードバックを回して精度を上げます。",
    bullets: ["業務アプリ / 管理画面", "予約・顧客管理", "PoC / MVPの短期立ち上げ"],
  },
  {
    title: "継続開発 / 運用保守",
    badge: "改善",
    desc: "リリース後の改善や追加開発を、月額でスピーディに回します（上限時間つき推奨）。",
    bullets: ["機能追加・UI改善", "障害対応・運用サポート", "改善提案（定例）"],
  },
];

export function Services() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {services.map((s) => (
        <Card key={s.title} className="hover:border-zinc-300 transition">
          <CardBody>
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold">{s.title}</h3>
              <Badge>{s.badge}</Badge>
            </div>
            <p className="mt-3 text-sm leading-7 text-zinc-600">{s.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
