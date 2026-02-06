import { Card, CardBody } from "@/components/ui/Card";

const rows: Array<{ label: string; value: string }> = [
  { label: "会社名", value: "株式会社NEXUSX" },
  { label: "事業内容", value: "業務システム開発 / Web・アプリ開発 / IT顧問・コンサルティング" },
  { label: "所在地", value: "東京都（市区町村まででもOK）" },
  { label: "連絡先", value: "info@nexusx.com（※仮）" },
];

export function Company() {
  return (
    <Card>
      <CardBody>
        <dl className="grid gap-4 sm:grid-cols-2">
          {rows.map((r) => (
            <div key={r.label} className="rounded-xl border border-zinc-200 p-4">
              <dt className="text-xs font-medium tracking-widest text-zinc-500">
                {r.label}
              </dt>
              <dd className="mt-2 text-sm text-zinc-800">{r.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-xs leading-6 text-zinc-500">
          ※ 表記はあとからいつでも更新できます。まずは「会社として検索したときに信用できる状態」を作るのが目的です。
        </p>
      </CardBody>
    </Card>
  );
}
