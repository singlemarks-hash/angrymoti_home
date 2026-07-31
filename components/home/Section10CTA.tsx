import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import StoreButtons from "@/components/ui/StoreButtons";
import { getMessages } from "@/lib/i18n";

export default function Section10CTA({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#150808_0%,#A22121_100%)] pt-20 text-white md:pt-[120px]">
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
      </div>

      {/* 목업 이미지 — 이미지 자체 하단에 여백이 없으므로 섹션 바닥에 그대로 붙인다 (하단 패딩 없음) */}
      <Reveal delay={300} className="mt-2 md:mt-4">
        <PlaceholderImage
          label="cta_mockup.png"
          width={1000}
          height={729}
          fitOriginal
          alt="앵그리모티 앱 화면 목업"
          className="mx-auto drop-shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
        />
      </Reveal>
    </section>
  );
}
