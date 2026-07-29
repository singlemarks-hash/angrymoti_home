import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "회사소개 - 터닝(Turning)" };

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ComingSoon locale={locale} pageName="회사소개" />;
}
