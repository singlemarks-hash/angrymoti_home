import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import { getMessages } from "@/lib/i18n";

export default function Section07HowToUse({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <section id="section_07" className="section-pad scroll-mt-20 bg-ink">
      <div className="container-content">
        <Reveal className="text-center">
          <span className="eyebrow">{t.howto.eyebrow}</span>
          <h2 className="section-title">{t.howto.title}</h2>
        </Reveal>

        {/* 핵심 루프는 실제 순서가 있는 절차 — 번호가 정보를 담는다 */}
        <ol className="mt-14 space-y-16 md:mt-20 md:space-y-24">
          {t.howto.steps.map((step, i) => {
            const reversed = i % 2 === 1;
            return (
              <li key={step.badge}>
                <Reveal>
                  <div
                    className={`flex flex-col items-center gap-8 md:gap-12 lg:gap-20 ${
                      reversed ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                  >
                    <div className="w-full md:w-1/2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-tomato px-4 py-1.5 text-[13px] font-bold text-white md:text-[14px]">
                        STEP {i + 1}
                        <span aria-hidden="true" className="opacity-50">
                          ·
                        </span>
                        {step.badge}
                      </span>
                      <h3 className="mt-4 text-[22px] font-bold leading-snug text-cream md:text-[28px]">
                        {step.subtitle}
                      </h3>
                      <p className="mt-4 text-[15px] leading-[1.75] text-cream-muted md:text-[17px]">
                        {step.body}
                      </p>
                      {"bubble" in step && step.bubble && (
                        <p className="mt-5 inline-block rounded-2xl rounded-bl-sm border border-tomato/30 bg-tomato-soft px-5 py-3 text-[14px] font-bold text-tomato md:text-[15px]">
                          “{step.bubble}”
                        </p>
                      )}
                    </div>
                    <div className="flex w-full justify-center md:w-1/2">
                      <PlaceholderImage
                        label={step.image}
                        variant="screenshot"
                        width={250}
                        height={510}
                        alt={`${step.subtitle} 화면`}
                      />
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
