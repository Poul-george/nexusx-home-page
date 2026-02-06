// import { Container } from "@/components/ui/Container";
import { Container } from "@/components/ui/Container";

export default function PrivacyPage() {
  return (
    <main className="py-16">
      <Container>
        <h1 className="text-2xl font-semibold tracking-tight">
          プライバシーポリシー
        </h1>
        <p className="mt-6 text-sm leading-7 text-zinc-700">
          株式会社NEXUSX（以下「当社」）は、お問い合わせ等を通じて取得した個人情報を、
          以下の目的の範囲内で適切に取り扱います。
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-base font-semibold">1. 利用目的</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-700">
              お問い合わせへの回答、サービス提供に関する連絡のために利用します。
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold">2. 第三者提供</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-700">
              法令に基づく場合を除き、本人の同意なく第三者に提供しません。
            </p>
          </section>
          <section>
            <h2 className="text-base font-semibold">3. お問い合わせ</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-700">
              個人情報の取扱いに関するお問い合わせは、当社窓口までご連絡ください。
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
