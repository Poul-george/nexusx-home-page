import { Card, CardBody } from "@/components/ui/Card";

const groups = [
  {
    title: "建設（10名前後の会社に強い）",
    bullets: ["現場管理・工程共有", "見積〜請求・原価の見える化", "日報・稼働管理"],
  },
  {
    title: "福祉・サービス",
    bullets: ["記録・報告の効率化", "シフト管理・勤怠", "顧客/利用者管理"],
  },
  {
    title: "資産運用・会員制ビジネス",
    bullets: ["顧客管理・契約管理", "案件進捗・タスク管理", "会員向け機能のMVP"],
  },
];

export function Industries() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {groups.map((g) => (
        <Card key={g.title} className="hover:border-zinc-300 transition">
          <CardBody>
            <h3 className="text-base font-semibold">{g.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              {g.bullets.map((b) => (
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
