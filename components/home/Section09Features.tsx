import { Check } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import HabitSlider from "./HabitSlider";
import { getMessages } from "@/lib/i18n";

/* TODO: 교체 → /assets/svg/check_orange.svg, check_marine.svg, check_pink.svg */

function FeatureBadge({
  color,
  label,
}: {
  color: "orange" | "marine" | "pink";
  label: string;
}) {
  const colorClass = {
    orange: "bg-accent-orange/10 text-accent-orange",
    marine: "bg-accent-marine/10 text-accent-marine",
    pink: "bg-accent-pink/10 text-accent-pink",
  }[color];

  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[14px] font-bold ${colorClass}`}>
      <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
      {label}
    </span>
  );
}

export default function Section09Features({ locale }: { locale: string }) {
  const t = getMessages(locale).features;

  return (
    <section className="section-pad bg-gray-50">
      <div className="container-content">
        <Reveal className="text-center">
          <p className="text-[17px] font-medium text-gray-500 md:text-[19px]">{t.intro}</p>
          <h2 className="section-title mt-3">{t.title}</h2>
        </Reveal>

        {/* 9-1 매일 매일 — 인터랙티브 슬라이더 */}
        <div className="mt-16 grid items-center gap-10 md:mt-24 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <FeatureBadge color="orange" label={t.f1.badge} />
            <h3 className="mt-4 text-[22px] font-bold leading-snug md:text-[28px]">{t.f1.subtitle}</h3>
            <p className="mt-4 text-[15px] leading-[1.75] text-gray-600 md:text-[17px]">{t.f1.body}</p>
          </Reveal>
          <Reveal delay={150}>
            <HabitSlider locale={locale} />
          </Reveal>
        </div>

        {/* 9-2 앱을 사용할 때 */}
        <div className="mt-20 grid items-center gap-10 md:mt-28 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-2">
            <FeatureBadge color="marine" label={t.f2.badge} />
            <h3 className="mt-4 text-[22px] font-bold leading-snug md:text-[28px]">{t.f2.subtitle}</h3>
            <p className="mt-4 text-[15px] leading-[1.75] text-gray-600 md:text-[17px]">{t.f2.body}</p>
          </Reveal>
          <Reveal delay={150} className="flex justify-center lg:order-1">
            <PlaceholderImage
              label="section_09_02.png"
              variant="screenshot"
              width={250}
              height={510}
              alt="다시 생각할 포인트 화면 — 심호흡하기, 다짐하기"
            />
          </Reveal>
        </div>

        {/* 9-3 과거부터 지금까지 */}
        <div className="mt-20 grid items-center gap-10 md:mt-28 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <FeatureBadge color="pink" label={t.f3.badge} />
            <h3 className="mt-4 text-[22px] font-bold leading-snug md:text-[28px]">{t.f3.subtitle}</h3>
            <p className="mt-4 text-[15px] leading-[1.75] text-gray-600 md:text-[17px]">{t.f3.body}</p>
          </Reveal>
          <Reveal delay={150} className="flex justify-center">
            <PlaceholderImage
              label="section_09_03.png"
              variant="screenshot"
              width={250}
              height={510}
              alt="사용 분석 리포트 화면"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
