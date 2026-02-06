import { Card, CardBody } from "@/components/ui/Card";

const items = [
  {
    title: "現場と事務のやり取りがバラバラ",
    desc: "LINE・電話・紙・Excelが混在し、情報が追えなくなる。結局社長が全部抱える状態に。",
  },
  {
    title: "見積・請求・原価が見えない",
    desc: "数字が追えず、利益の出ている案件／出ていない案件の判断が遅れる。",
  },
  {
    title: "担当者依存で引き継げない",
    desc: "誰が何を知っているか属人化。人が増えた瞬間に業務が回らなくなる。",
  },
];

export function Problems() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((i) => (
        <Card key={i.title} className="hover:border-zinc-300 transition">
          <CardBody>
            <h3 className="text-base font-semibold">{i.title}</h3>
            <p className="mt-2 text-sm leading-7 text-zinc-600">{i.desc}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
