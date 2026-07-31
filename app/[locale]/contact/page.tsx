import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "지원 및 문의 - 앵그리모티" };

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ComingSoon locale={locale} pageName="지원 및 문의" anchorIds={["faq", "inquiry"]} />;
}
