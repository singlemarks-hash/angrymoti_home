import { Star } from "lucide-react";
import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import { getMessages } from "@/lib/i18n";

/* TODO: 교체 → /assets/svg/review_stars.svg */

export default function Section06Reviews({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="container-content text-center">
        <Reveal>
          <h2 className="section-title mx-auto max-w-[720px]">{t.reviews.title}</h2>
          <p className="section-sub mx-auto mt-5 max-w-[560px]">{t.reviews.sub}</p>
        </Reveal>
      </div>

      <Reveal delay={150} className="mt-12 md:mt-16">
        <Marquee>
          {t.reviews.items.map((review) => (
            <article
              key={review.nickname}
              className="flex w-[300px] shrink-0 flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:w-[360px] md:p-7"
            >
              <div className="flex gap-0.5 text-amber-400" role="img" aria-label="별점 5점 만점에 5점">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <h3 className="mt-4 text-[17px] font-bold leading-snug text-gray-900 md:text-[18px]">
                {review.title}
              </h3>
              <p className="mt-1.5 text-[13px] font-medium text-brand-deep">
                {review.nickname} {t.reviews.suffix}
              </p>
              <p className="mt-4 text-[14px] leading-[1.7] text-gray-600 md:text-[15px]">
                {review.body}
              </p>
            </article>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
