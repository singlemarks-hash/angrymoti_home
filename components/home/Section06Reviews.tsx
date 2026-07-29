import { Star } from "lucide-react";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import { getMessages } from "@/lib/i18n";

/* TODO: 교체 → /assets/svg/review_stars.svg */

export default function Section06Reviews({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <section className="section-pad overflow-hidden bg-ink-surface">
      <div className="container-content text-center">
        <Reveal>
          <h2 className="section-title mx-auto max-w-[760px]">{t.reviews.title}</h2>
          <p className="section-sub mx-auto mt-5 max-w-[600px]">{t.reviews.sub}</p>
        </Reveal>
      </div>

      <Reveal delay={150} className="mt-12 md:mt-16">
        <Marquee>
          {t.reviews.items.map((review) => (
            <article
              key={review.nickname}
              className="flex w-[300px] shrink-0 flex-col rounded-3xl border border-ink-line bg-ink-raised p-6 md:w-[360px] md:p-7"
            >
              <div className="flex gap-0.5 text-amber" role="img" aria-label="별점 5점 만점에 5점">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <h3 className="mt-4 text-[17px] font-bold leading-snug text-cream md:text-[18px]">
                {review.title}
              </h3>
              <p className="mt-1.5 text-[13px] font-medium text-tomato">
                {review.nickname} {t.reviews.suffix}
              </p>
              <p className="mt-4 text-[14px] leading-[1.7] text-cream-muted md:text-[15px]">
                {review.body}
              </p>
            </article>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
