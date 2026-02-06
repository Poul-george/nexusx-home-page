import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.06),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(0,0,0,0.04),transparent_40%)]" />
      <Container className="relative py-16 sm:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>社長直</Badge>
              <Badge>業務整理 → MVP → 運用改善</Badge>
              <Badge>建設・福祉・中小企業</Badge>
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
              業務を整え、
              <br className="hidden sm:block" />
              使われるプロダクトを最短で。
            </h1>

            <p className="mt-5 text-sm leading-7 text-zinc-600 sm:text-base">
              NEXUSXは、社長直のITパートナーとして「現場で使える形」に落とし込みます。
              要件が固まっていなくても大丈夫。課題整理から一緒に進めます。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" variant="primary">
                まず相談する
              </Button>
              <Button href="#services" variant="secondary">
                提供内容を見る
              </Button>
            </div>

            <p className="mt-6 text-xs text-zinc-500">
              ※ 小さく作って早く使い、運用で育てるスタイルが得意です。
            </p>
          </div>

          <div className="w-full max-w-xl">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft">
              <p className="text-xs font-medium tracking-widest text-zinc-500">
                まずここから
              </p>
              <div className="mt-4 grid gap-3">
                <div className="rounded-xl border border-zinc-200 p-4">
                  <p className="text-sm font-medium">業務の棚卸し（30〜60分）</p>
                  <p className="mt-1 text-sm text-zinc-600">
                    どこが詰まっているかを整理し、最小の打ち手を決めます。
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-200 p-4">
                  <p className="text-sm font-medium">MVPの範囲を確定</p>
                  <p className="mt-1 text-sm text-zinc-600">
                    作りすぎず、まず使える形を最短で作ります。
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-200 p-4">
                  <p className="text-sm font-medium">運用・改善の仕組み化</p>
                  <p className="mt-1 text-sm text-zinc-600">
                    “作って終わり”ではなく、継続的に改善します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
