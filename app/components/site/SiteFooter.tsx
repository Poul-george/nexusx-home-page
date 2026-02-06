import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-zinc-600">
          © {new Date().getFullYear()} NEXUSX
        </div>
        <div className="flex gap-4 text-sm">
          <a className="text-zinc-600 hover:text-black" href="/privacy">
            プライバシーポリシー
          </a>
          <a className="text-zinc-600 hover:text-black" href="#contact">
            お問い合わせ
          </a>
        </div>
      </Container>
    </footer>
  );
}
