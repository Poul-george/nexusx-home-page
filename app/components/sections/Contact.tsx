import { Card, CardBody } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardBody>
          <h3 className="text-base font-semibold">お問い合わせ</h3>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            まずは状況の整理からでも大丈夫です。以下のフォームからご連絡ください。
          </p>

          {/* フォームは後で /api/contact などに繋ぐ想定（最初はmailtoでもOK） */}
          <form className="mt-6 grid gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                className="h-11 rounded-xl border border-zinc-200 px-4 text-sm outline-none focus:border-zinc-400"
                placeholder="お名前"
                name="name"
              />
              <input
                className="h-11 rounded-xl border border-zinc-200 px-4 text-sm outline-none focus:border-zinc-400"
                placeholder="会社名"
                name="company"
              />
            </div>
            <input
              className="h-11 rounded-xl border border-zinc-200 px-4 text-sm outline-none focus:border-zinc-400"
              placeholder="メールアドレス"
              name="email"
              type="email"
            />
            <textarea
              className="min-h-[120px] rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
              placeholder="ご相談内容（例：現場管理がLINEで散らばっている / 見積・請求が大変 など）"
              name="message"
            />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-zinc-500">
                送信機能は後で実装できます。まずは公開を優先するなら「メールで相談」導線でもOKです。
              </p>
              <Button
                href="mailto:info@nexusx.com?subject=お問い合わせ&body=お名前:%0D%0A会社名:%0D%0Aご相談内容:%0D%0A"
                variant="primary"
              >
                メールで相談
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <h3 className="text-base font-semibold">相談の目安</h3>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            「要件が固まっていない」「何から手を付けるべきか分からない」状態からでも大丈夫です。
          </p>
          <div className="mt-5 space-y-3">
            <div className="rounded-xl border border-zinc-200 p-4">
              <p className="text-sm font-medium">相談例</p>
              <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                <li>・現場管理をまとめたい</li>
                <li>・見積〜請求を効率化したい</li>
                <li>・MVPを作って検証したい</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200 p-4">
              <p className="text-sm font-medium">対応</p>
              <p className="mt-2 text-sm text-zinc-700">
                オンライン/対面（都内）どちらも可
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
