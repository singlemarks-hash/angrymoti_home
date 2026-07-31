import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import StoreButtons from "@/components/ui/StoreButtons";
import { getMessages } from "@/lib/i18n";

export default function Section10CTA({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <section className="section-pad relative overflow-hidden bg-[linear-gradient(180deg,#3A0D08_0%,#B32316_38%,#F0402C_72%,#FF5A45_100%)] text-white">
      <div className="container-content relative text-center">
        <Reveal>
          <h2 className="text-[28px] font-extrabold tracking-[-0.01em] md:text-[40px]">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] text-white/85 md:text-[19px]">
            {t.cta.sub}
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-8">
          <StoreButtons locale={locale} tone="brand" />
        </Reveal>

        {/* 목업 이미지 자리 — 어떤 비율이든 원본 그대로 표시된다 */}
        <Reveal delay={300} className="mt-14 md:mt-20">
          <PlaceholderImage
            label="cta_mockup.png"
            width={1000}
            height={520}
            fitOriginal
            alt="앵그리모티 앱 화면 목업"
            className="drop-shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
