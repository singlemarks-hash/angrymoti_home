import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import { getMessages } from "@/lib/i18n";

export default function Section04Apps({ locale }: { locale: string }) {
  const t = getMessages(locale);
  const willFiles = ["tool-1.svg", "tool-2.svg", "tool-3.svg"];
  const envFiles = ["moti-1.svg", "moti-2.svg", "moti-3.svg"];

  return (
    <section className="section-pad bg-ink-surface">
      <div className="container-content grid gap-14 lg:grid-cols-2 lg:gap-10">
        {/* 의지에 기대는 도구 — 흐림/무채색 */}
        <Reveal>
          <div className="flex flex-col items-center">
            <div className="grid w-full grid-cols-3 gap-3 md:gap-4">
              {willFiles.map((file, i) => (
                <div
                  key={file}
                  className="p-2 opacity-50 saturate-0 transition-all duration-300 hover:opacity-80"
                >
                  <PlaceholderImage
                    label={file}
                    width={200}
                    height={200}
                    alt={`의지에 기대는 도구 — ${t.apps.willLabels[i]}`}
                  />
                  <p className="mt-2 text-center text-[13px] leading-snug text-cream-dim md:text-[14px]">
                    {t.apps.willLabels[i]}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-[20px] font-bold text-cream-dim md:text-[26px]">
              {t.apps.willConclusion}
            </p>
          </div>
        </Reveal>

        {/* 환경을 만드는 장치 — 토마토 강조 */}
        <Reveal delay={150}>
          <div className="flex flex-col items-center">
            <div className="grid w-full grid-cols-3 gap-3 md:gap-4">
              {envFiles.map((file, i) => (
                <div
                  key={file}
                  className="rounded-2xl p-2 ring-1 ring-tomato/30 transition-shadow duration-300 hover:shadow-[0_8px_28px_rgba(255,72,52,0.18)]"
                >
                  <PlaceholderImage
                    label={file}
                    width={200}
                    height={200}
                    alt={`앵그리모티의 장치 — ${t.apps.envLabels[i]}`}
                  />
                  <p className="mt-2 pb-1 text-center text-[13px] font-bold leading-snug text-tomato md:text-[14px]">
                    {t.apps.envLabels[i]}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-[20px] font-bold text-cream md:text-[26px]">
              {t.apps.envConclusion}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
