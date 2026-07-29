import type { Metadata } from "next";
import ComingSoon from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "요금제 - 터닝(Turning)" };

export default async function BillingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ComingSoon locale={locale} pageName="요금제" anchorIds={["section_07"]} />;
}
