import PlaceholderImage from "@/components/ui/PlaceholderImage";
import AppStoreButton from "@/components/ui/AppStoreButton";
import Reveal from "@/components/ui/Reveal";
import { getMessages } from "@/lib/i18n";

export default function Section01Hero({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <section className="overflow-hidden bg-brand-tint">
      <div className="container-content flex flex-col items-center pb-16 pt-14 text-center md:pb-24 md:pt-20">
        <Reveal>
          <h1 className="text-[26px] font-bold leading-[1.4] md:text-[40px] lg:text-[48px]">
            {t.hero.line1}
            <br />
            <span className="text-brand">{t.hero.line2}</span>
          </h1>
        </Reveal>

        <Reveal delay={150} className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:mt-10">
          <AppStoreButton label={t.hero.iphone} />
          <AppStoreButton label={t.hero.ipad} />
        </Reveal>

        <Reveal delay={300} className="mt-12 w-full md:mt-16">
          {/* 반응형 히어로 3종: 뷰포트별로 다른 목업 표시 */}
          <div className="hidden lg:block">
            <PlaceholderImage label="hero_pc.png" width={1152} height={480} alt="터닝 앱 히어로 이미지 (PC)" />
          </div>
          <div className="hidden md:block lg:hidden">
            <PlaceholderImage label="hero_tb.png" width={720} height={420} alt="터닝 앱 히어로 이미지 (태블릿)" className="mx-auto" />
          </div>
          <div className="md:hidden">
            <PlaceholderImage label="hero_mb.png" width={343} height={380} alt="터닝 앱 히어로 이미지 (모바일)" className="mx-auto" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
