import Reveal from "@/components/ui/Reveal";
import { getMessages } from "@/lib/i18n";

export default function Section03Escape({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <section className="section-pad bg-ink">
      <div className="container-content flex flex-col items-center text-center">
        <Reveal>
          <h2 className="section-title">{t.escape.title1}</h2>
        </Reveal>

        <Reveal delay={150}>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
            {t.escape.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-tomato/40 bg-tomato-soft px-4 py-2 text-[14px] font-bold text-tomato md:px-5 md:py-2.5 md:text-[16px]"
              >
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={300}>
          <h2 className="section-title mt-7">{t.escape.title2}</h2>
        </Reveal>
      </div>
    </section>
  );
}
