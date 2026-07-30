import PlaceholderImage from "@/components/ui/PlaceholderImage";
import StoreButtons from "@/components/ui/StoreButtons";
import Reveal from "@/components/ui/Reveal";
import { getMessages } from "@/lib/i18n";

export default function Section01Hero({ locale }: { locale: string }) {
  const t = getMessages(locale);
  // 모바일에서는 "타임랩스로 / 나의 몰입을 기록해요"로 줄바꿈 (md 이상은 한 줄)
  const [line1First, ...line1RestWords] = t.hero.line1.split(" ");
  const line1Rest = line1RestWords.join(" ");

  return (
    <section className="relative overflow-hidden bg-ink">
      {/* 배경 광원 — 알람이 울리는 방의 온기 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[880px] -translate-x-1/2 rounded-full bg-tomato/10 blur-[120px]"
      />

      <div className="container-content relative flex flex-col items-center pb-16 pt-14 text-center md:pb-24 md:pt-20">
        <Reveal>
          <h1 className="text-[34px] font-bold leading-[1.3] tracking-[-0.01em] md:text-[40px] md:leading-[1.4] lg:text-[46px]">
            <span className="md:hidden">
              {line1First}
              <br />
              {line1Rest}
            </span>
            <span className="hidden md:inline">{t.hero.line1}</span>
            <br />
            <span className="text-tomato">{t.hero.line2}</span>
          </h1>
        </Reveal>

        <Reveal delay={150} className="mt-8 md:mt-10">
          <StoreButtons locale={locale} />
        </Reveal>

        {/* 시그니처 — 울리는 알람. 폰 뒤로 토마토 링이 계속 퍼져나간다. */}
        <Reveal delay={300} className="mt-10 w-full md:mt-14">
          <div className="relative flex justify-center">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="absolute h-[300px] w-[300px] animate-ring rounded-full border-2 border-tomato md:h-[420px] md:w-[420px]" />
              <span
                className="absolute h-[300px] w-[300px] animate-ring rounded-full border-2 border-tomato md:h-[420px] md:w-[420px]"
                style={{ animationDelay: "0.8s" }}
              />
              <span
                className="absolute h-[300px] w-[300px] animate-ring rounded-full border-2 border-tomato md:h-[420px] md:w-[420px]"
                style={{ animationDelay: "1.6s" }}
              />
            </div>

            <div className="relative">
              <div className="hidden lg:block">
                <PlaceholderImage
                  label="hero_tb.png"
                  variant="screenshot"
                  width={280}
                  height={570}
                  alt="앵그리모티 알람 화면"
                />
              </div>
              <div className="hidden md:block lg:hidden">
                <PlaceholderImage
                  label="hero_tb.png"
                  variant="screenshot"
                  width={260}
                  height={530}
                  alt="앵그리모티 알람 화면"
                />
              </div>
              <div className="md:hidden">
                <PlaceholderImage
                  label="hero_tb.png"
                  variant="screenshot"
                  width={230}
                  height={470}
                  alt="앵그리모티 알람 화면"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
