import { Apple } from "lucide-react";
import { APP_STORE_URL } from "@/lib/constants";

/* TODO: 교체 → /assets/svg/symbol_apple.svg */

interface AppStoreButtonProps {
  label: string;
  variant?: "dark" | "light";
  className?: string;
}

export default function AppStoreButton({
  label,
  variant = "dark",
  className = "",
}: AppStoreButtonProps) {
  const style =
    variant === "dark"
      ? "bg-gray-900 text-white hover:bg-gray-700"
      : "bg-white text-gray-900 hover:bg-gray-100";

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[16px] font-semibold transition-colors md:px-7 md:py-4 md:text-[17px] ${style} ${className}`}
    >
      <Apple aria-hidden="true" className="h-5 w-5 -translate-y-[1px] fill-current" />
      <span>{label}</span>
    </a>
  );
}
