import Section01Hero from "@/components/home/Section01Hero";
import Section02Screentime from "@/components/home/Section02Screentime";
import Section03Escape from "@/components/home/Section03Escape";
import Section04Apps from "@/components/home/Section04Apps";
import Section05Stats from "@/components/home/Section05Stats";
import Section06Reviews from "@/components/home/Section06Reviews";
import Section07HowToUse from "@/components/home/Section07HowToUse";
import Section08Result from "@/components/home/Section08Result";
import Section09Features from "@/components/home/Section09Features";
import Section10CTA from "@/components/home/Section10CTA";
import Section11LinkCards from "@/components/home/Section11LinkCards";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Section01Hero locale={locale} />
      <Section02Screentime locale={locale} />
      <Section03Escape locale={locale} />
      <Section04Apps locale={locale} />
      <Section05Stats locale={locale} />
      <Section06Reviews locale={locale} />
      <Section07HowToUse locale={locale} />
      <Section08Result locale={locale} />
      <Section09Features locale={locale} />
      <Section10CTA locale={locale} />
      <Section11LinkCards locale={locale} />
    </>
  );
}
