import { Apple } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import { APP_STORE_URL } from "@/lib/constants";
import { getMessages } from "@/lib/i18n";

export default function Section10CTA({ locale }: { locale: string }) {
  const t = getMessages(locale);
  const logos = Array.from({ length: 8 }, (_, i) => `press_0${i + 1}.png`);

  return (
    <section className="section-pad relative overflow-hidden bg-tomato text-white">
      <div className="container-content relative text-center">
        <Reveal>
          <h2 className="text-[28px] font-extrabold tracking-[-0.01em] md:text-[40px]">
            {t.cta.title}
          </h2>
          <p className="mt-4 text-[16px] text-white/85 md:text-[19px]">{t.cta.sub}</p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-[16px] font-bold text-cream transition-transform hover:scale-[1.03] md:text-[18px]"
          >
            {/* TODO: 교체 → /assets/svg/symbol_apple.svg */}
            <Apple className="h-5 w-5 fill-current" aria-hidden="true" />
            {t.cta.button}
          </a>
        </Reveal>

        <Reveal delay={200} className="mt-16 md:mt-20">
          <ul className="grid grid-cols-4 gap-3 md:gap-5">
            {logos.map((file) => (
              <li key={file} className="opacity-60 grayscale">
                <PlaceholderImage
                  label={file}
                  variant="logo"
                  width={260}
                  height={90}
                  alt={`언론보도 로고 ${file}`}
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
