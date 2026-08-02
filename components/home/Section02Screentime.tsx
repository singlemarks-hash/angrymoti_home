import { Plus, X } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import LottiePlayer from "@/components/ui/LottiePlayer";
import Reveal from "@/components/ui/Reveal";
import { getMessages } from "@/lib/i18n";

/* TODO: 교체 → /assets/svg/plus.svg, /assets/svg/x.svg */

export default function Section02Screentime({ locale }: { locale: string }) {
  const t = getMessages(locale);
  // 균형 잡힌 줄바꿈 — "~환경을" 뒤에서 끊어 두 줄 길이를 맞춘다
  const breakAt = "환경을";
  const breakIdx = t.screentime.right.indexOf(breakAt);
  const rightFirst =
    breakIdx >= 0 ? t.screentime.right.slice(0, breakIdx + breakAt.length) : t.screentime.right;
  const rightRest = breakIdx >= 0 ? t.screentime.right.slice(breakIdx + breakAt.length).trim() : "";

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
              {/* 원본 캔버스(1000×900)에 여백이 많아 viewBox로 콘텐츠 영역만 잘라 쓴다 */}
              <LottiePlayer
                file="thinking.json"
                width={320}
                viewBox="245 186 494 714"
                label="결심을 지킬 방법을 고민하는 사람"
                className="mt-6"
              />
            </div>
          </Reveal>

          <Reveal delay={300} className="order-3">
            <div className="flex items-center justify-center gap-3 lg:flex-col lg:items-end">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-jade-soft text-jade">
                <Plus className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-[17px] font-medium text-cream-muted md:text-[19px] lg:text-right">
                {rightFirst}
                <br />
                {rightRest}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
