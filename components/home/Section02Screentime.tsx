import { Plus, X } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import { getMessages } from "@/lib/i18n";

/* TODO: 교체 → /assets/svg/plus_green.svg, /assets/svg/x_green.svg */

export default function Section02Screentime({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <section className="section-pad bg-white">
      <div className="container-content">
        <Reveal>
          <h2 className="section-title text-center">{t.screentime.title}</h2>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 md:mt-16 lg:grid-cols-3">
          <Reveal delay={100} className="order-2 lg:order-1">
            <div className="flex items-center justify-center gap-3 lg:flex-col lg:items-start">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                <Plus className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-[17px] font-medium text-gray-700 md:text-[19px]">{t.screentime.left}</p>
            </div>
          </Reveal>

          <Reveal delay={200} className="order-1 lg:order-2">
            <div className="flex flex-col items-center">
              <p className="text-[40px] font-extrabold leading-none text-brand md:text-[56px]">
                {t.screentime.hoursPrefix}{" "}
                <CountUp end={t.screentime.hours} durationMs={1600} />
                {t.screentime.hoursSuffix}
              </p>
              <div className="relative mt-8">
                {/* 원형 게이지 장식 */}
                <div
                  aria-hidden="true"
                  className="absolute -left-6 -top-6 h-16 w-16 rounded-full border-[6px] border-brand-soft border-t-brand"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-7 h-12 w-12 rounded-full bg-brand-soft"
                />
                <PlaceholderImage
                  label="section_02.png"
                  variant="screenshot"
                  width={230}
                  height={470}
                  alt="평균 스크린타임 화면 목업"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={300} className="order-3">
            <div className="flex items-center justify-center gap-3 lg:flex-col lg:items-end">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                <X className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-[17px] font-medium text-gray-700 md:text-[19px] lg:text-right">
                {t.screentime.right}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
