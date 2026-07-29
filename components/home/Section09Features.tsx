import { Check } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import MotiSlider from "./MotiSlider";
import { getMessages } from "@/lib/i18n";

/* TODO: 교체 → /assets/svg/check_tomato.svg, check_amber.svg, check_jade.svg */

function FeatureBadge({
  color,
  label,
}: {
  color: "tomato" | "amber" | "jade";
  label: string;
}) {
  const colorClass = {
    tomato: "bg-tomato-soft text-tomato",
    amber: "bg-amber-soft text-amber",
    jade: "bg-jade-soft text-jade",
  }[color];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[14px] font-bold ${colorClass}`}
    >
      <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
      {label}
    </span>
  );
}

export default function Section09Features({ locale }: { locale: string }) {
  const t = getMessages(locale).features;

  return (
    <section className="section-pad bg-ink">
      <div className="container-content">
        <Reveal className="text-center">
          <p className="text-[17px] font-medium text-cream-muted md:text-[19px]">{t.intro}</p>
          <h2 className="section-title mt-3">{t.title}</h2>
        </Reveal>

        {/* 9-1 미루고 싶을 때 — 인터랙티브 슬라이더 */}
        <div className="mt-16 grid items-center gap-10 md:mt-24 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <FeatureBadge color="tomato" label={t.f1.badge} />
            <h3 className="mt-4 text-[22px] font-bold leading-snug text-cream md:text-[28px]">
              {t.f1.subtitle}
            </h3>
            <p className="mt-4 text-[15px] leading-[1.75] text-cream-muted md:text-[17px]">
              {t.f1.body}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <MotiSlider locale={locale} />
          </Reveal>
        </div>

        {/* 9-2 혼자는 힘들 때 */}
        <div className="mt-20 grid items-center gap-10 md:mt-28 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-2">
            <FeatureBadge color="amber" label={t.f2.badge} />
            <h3 className="mt-4 text-[22px] font-bold leading-snug text-cream md:text-[28px]">
              {t.f2.subtitle}
            </h3>
            <p className="mt-4 text-[15px] leading-[1.75] text-cream-muted md:text-[17px]">
              {t.f2.body}
            </p>
          </Reveal>
          <Reveal delay={150} className="flex justify-center lg:order-1">
            <PlaceholderImage
              label="section_09_group.png"
              variant="screenshot"
              width={250}
              height={510}
              alt="그룹 챌린지 랭킹 화면"
            />
          </Reveal>
        </div>

        {/* 9-3 완주한 뒤에 */}
        <div className="mt-20 grid items-center gap-10 md:mt-28 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <FeatureBadge color="jade" label={t.f3.badge} />
            <h3 className="mt-4 text-[22px] font-bold leading-snug text-cream md:text-[28px]">
              {t.f3.subtitle}
            </h3>
            <p className="mt-4 text-[15px] leading-[1.75] text-cream-muted md:text-[17px]">
              {t.f3.body}
            </p>
          </Reveal>
          <Reveal delay={150} className="flex justify-center">
            <PlaceholderImage
              label="section_09_record.png"
              variant="screenshot"
              width={250}
              height={510}
              alt="타임랩스 기록과 연속 달성 화면"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
