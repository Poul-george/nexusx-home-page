import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Industries } from "@/components/sections/Industries";
import { Pricing } from "@/components/sections/Pricing";
import { Company } from "@/components/sections/Company";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <Section id="problems" eyebrow="課題" title="こんなお悩みはありませんか？">
        <Container>
          <Problems />
        </Container>
      </Section>

      <Section id="services" eyebrow="提供内容" title="サービス">
        <Container>
          <Services />
        </Container>
      </Section>

      <Section id="process" eyebrow="進め方" title="プロジェクトの進め方">
        <Container>
          <Process />
        </Container>
      </Section>

      <Section id="industries" eyebrow="対応領域" title="業種別の支援例">
        <Container>
          <Industries />
        </Container>
      </Section>

      <Section id="pricing" eyebrow="料金目安" title="料金">
        <Container>
          <Pricing />
        </Container>
      </Section>

      <Section id="company" eyebrow="会社情報" title="会社概要">
        <Container>
          <Company />
        </Container>
      </Section>

      <Section
        id="contact"
        eyebrow="相談"
        title="まずはお気軽にご相談ください"
        description="現状整理からでも大丈夫です。最小の形で始め、運用しながら育てていきます。"
      >
        <Container>
          <Contact />
        </Container>
      </Section>
    </main>
  );
}
