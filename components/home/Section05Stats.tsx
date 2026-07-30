import { Timer, Video, Users } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import { getMessages } from "@/lib/i18n";

/* TODO: 교체 → /assets/svg/stat_01.svg, stat_02.svg, stat_03.svg */
const ICONS = [Timer, Video, Users];
const ACCENTS = [
  { bg: "bg-tomato-soft", fg: "text-tomato" },
  { bg: "bg-amber-soft", fg: "text-amber" },
  { bg: "bg-jade-soft", fg: "text-jade" },
];

export default function Section05Stats({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <section className="section-pad bg-ink">
      <div className="container-content text-center">
        <Reveal>
          <h2 className="section-title">{t.stats.title}</h2>
          <p className="section-sub mx-auto mt-5 max-w-[640px]">{t.stats.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-y-14 md:mt-20 md:grid-cols-3 md:divide-x md:divide-ink-line">
          {t.stats.items.map((item, i) => {
            const Icon = ICONS[i];
            const accent = ACCENTS[i];
            return (
              <Reveal key={item.label} delay={i * 120}>
                <div className="flex h-full flex-col items-center px-6">
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${accent.bg} ${accent.fg}`}
                  >
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <p className="numeral mt-5 text-[36px] text-cream md:text-[44px]">
                    <CountUp end={item.value} />
                    {item.suffix}
                  </p>
                  <p className="mx-auto mt-3 max-w-[220px] text-[15px] text-cream-muted md:text-[16px]">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
