import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { getMessages } from "@/lib/i18n";

/* TODO: 교체 → /assets/svg/arrow_right.svg */

export default function Section11LinkCards({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <section className="section-pad bg-ink">
      <div className="container-content grid gap-4 md:grid-cols-2 md:gap-5">
        {t.linkCards.map((card, i) => {
          const isExternal = card.href === "#" || card.href.startsWith("http");
          const inner = (
            <>
              <p className="text-[17px] font-bold text-cream md:text-[19px]">{card.text}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-bold text-tomato transition-transform duration-200 group-hover:translate-x-1">
                {card.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </>
          );
          const cardClass =
            "group flex flex-col items-start rounded-3xl border border-ink-line bg-ink-surface p-7 transition-colors hover:border-tomato/40 hover:bg-ink-raised md:p-9";

          return (
            <Reveal key={card.text} delay={i * 80}>
              {isExternal ? (
                /* 채용 공고 — 외부 채용 링크, 추후 교체 */
                <a href={card.href} className={cardClass}>
                  {inner}
                </a>
              ) : (
                <Link href={card.href} className={cardClass}>
                  {inner}
                </Link>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
