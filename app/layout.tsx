import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: "NEXUSX | 社長直の業務システム開発・IT支援",
  description:
    "建設・福祉・中小企業向けに、業務整理からMVP開発、運用改善まで一貫して支援します。",
  openGraph: {
    title: "NEXUSX",
    description:
      "社長直の業務システム開発・IT支援。業務整理からMVP開発、運用改善まで。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className="min-h-dvh bg-white text-zinc-900 antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
