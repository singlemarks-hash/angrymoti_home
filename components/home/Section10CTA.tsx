import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import StoreButtons from "@/components/ui/StoreButtons";
import { getMessages } from "@/lib/i18n";

export default function Section10CTA({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <section className="section-pad relative overflow-hidden bg-[linear-gradient(150deg,#3A0D08_0%,#B32316_38%,#F0402C_72%,#FF5A45_100%)] text-white">
      {/* 부드러운 광원 — 그라디언트에 깊이를 준다 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-[480px] w-[480px] rounded-full bg-ink/40 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[560px] w-[560px] rounded-full bg-amber/20 blur-[140px]"
      />

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
