import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import { getMessages } from "@/lib/i18n";

export default function Section04Apps({ locale }: { locale: string }) {
  const t = getMessages(locale);
  const disturbFiles = ["disturb-1.png", "disturb-2.png", "disturb-3.png"];
  const usefulFiles = ["useful-1.png", "useful-2.png", "useful-3.png"];

  return (
    <section className="section-pad bg-white">
      <div className="container-content grid gap-14 lg:grid-cols-2 lg:gap-10">
        {/* 방해 앱 — 흐림/회색 톤 */}
        <Reveal>
          <div className="flex flex-col items-center">
            <div className="grid w-full grid-cols-3 gap-3 md:gap-4">
              {disturbFiles.map((file, i) => (
                <div key={file} className="opacity-60 saturate-0 transition-all duration-300 hover:opacity-100 hover:saturate-100">
                  <PlaceholderImage
                    label={file}
                    width={200}
                    height={240}
                    alt={`방해되는 앱 — ${t.apps.disturbLabels[i]}`}
                  />
                  <p className="mt-2 text-center text-[13px] text-gray-400 md:text-[14px]">
                    {t.apps.disturbLabels[i]}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[22px] font-bold text-gray-400 md:text-[28px]">
              {t.apps.disturbConclusion}
            </p>
          </div>
        </Reveal>

        {/* 도움 앱 — 컬러 강조 */}
        <Reveal delay={150}>
          <div className="flex flex-col items-center">
            <div className="grid w-full grid-cols-3 gap-3 md:gap-4">
              {usefulFiles.map((file, i) => (
                <div key={file} className="rounded-2xl ring-2 ring-brand/20 transition-shadow duration-300 hover:shadow-lg">
                  <PlaceholderImage
                    label={file}
                    width={200}
                    height={240}
                    alt={`도움되는 앱 — ${t.apps.usefulLabels[i]}`}
                  />
                  <p className="mt-2 pb-1 text-center text-[13px] font-semibold text-brand-deep md:text-[14px]">
                    {t.apps.usefulLabels[i]}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[22px] font-bold text-gray-900 md:text-[28px]">
              <span className="text-brand">{t.apps.usefulConclusion}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
