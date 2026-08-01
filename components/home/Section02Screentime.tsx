import { Plus, X } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import { getMessages } from "@/lib/i18n";

/* TODO: 교체 → /assets/svg/plus.svg, /assets/svg/x.svg */

export default function Section02Screentime({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <section className="section-pad bg-ink-surface">
      <div className="container-content">
        <Reveal>
          <h2 className="section-title text-center">{t.screentime.title}</h2>
        </Reveal>

        <div className="mt-8 grid items-center gap-10 md:mt-12 lg:grid-cols-3">
          <Reveal delay={100} className="order-2 lg:order-1">
            <div className="flex items-center justify-center gap-3 lg:flex-col lg:items-start">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tomato-soft text-tomato">
                <X className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-[17px] font-medium text-cream-muted md:text-[19px]">
                {t.screentime.left}
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} className="order-1 lg:order-2">
            <div className="flex flex-col items-center">
              <p className="numeral text-[40px] text-tomato md:text-[56px]">
                {t.screentime.countPrefix}
                {t.screentime.countPrefix ? " " : ""}
                <CountUp end={t.screentime.count} durationMs={1600} />
                {t.screentime.countSuffix}
              </p>
              {t.screentime.citation && (
                <p className="mt-2 text-[13px] text-cream-dim">{t.screentime.citation}</p>
              )}
              <div className="relative mt-8">
                <div
                  aria-hidden="true"
                  className="absolute -left-6 -top-6 h-16 w-16 rounded-full border-[6px] border-ink-line border-t-tomato"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-7 h-12 w-12 rounded-full bg-tomato-soft"
                />
                <PlaceholderImage
                  label="section_02_alarm.png"
                  variant="screenshot"
                  width={230}
                  height={470}
                  alt="새해 결심이 흔들리는 순간을 보여주는 화면"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={300} className="order-3">
            <div className="flex items-center justify-center gap-3 lg:flex-col lg:items-end">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-jade-soft text-jade">
                <Plus className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-[17px] font-medium text-cream-muted md:text-[19px] lg:text-right">
                {t.screentime.right}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
