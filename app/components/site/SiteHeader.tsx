import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const nav = [
  { label: "課題", hash: "problems" },
  { label: "サービス", hash: "services" },
  { label: "進め方", hash: "process" },
  { label: "料金", hash: "pricing" },
  { label: "会社概要", hash: "company" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/X.svg"
            alt="NexusX"
            width={148}
            height={64}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.hash}
              href={{ pathname: "/", hash: item.hash }}
              className="text-sm text-zinc-600 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/#contact" variant="primary">
            相談する
          </Button>
        </div>
      </Container>
    </header>
  );
}
