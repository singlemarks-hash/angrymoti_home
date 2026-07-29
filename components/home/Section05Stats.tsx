import { Trophy, Users, Globe2 } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import { getMessages } from "@/lib/i18n";

/* TODO: 교체 → /assets/svg/home_section_05_01.svg, home_section_05_02.svg, home_section_05_03.svg */
const ICONS = [Trophy, Users, Globe2];

export default function Section05Stats({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <section className="section-pad bg-brand-tint">
      <div className="container-content text-center">
        <Reveal>
          <h2 className="section-title">{t.stats.title}</h2>
          <p className="section-sub mx-auto mt-5 max-w-[640px]">{t.stats.sub}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {t.stats.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={item.label} delay={i * 120}>
                <div className="flex flex-col items-center rounded-3xl bg-white px-6 py-10 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-[36px] font-extrabold leading-none text-gray-900 md:text-[44px]">
                    <CountUp end={item.value} />
                    {item.suffix}
                  </p>
                  <p className="mt-3 text-[15px] text-gray-600 md:text-[16px]">{item.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
