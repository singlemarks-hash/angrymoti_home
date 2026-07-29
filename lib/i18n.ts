import ko from "@/messages/ko.json";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "./constants";

export type Messages = typeof ko;

const messages: Record<Locale, Messages> = { ko };

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function getMessages(locale: string): Messages {
  return isLocale(locale) ? messages[locale] : messages[DEFAULT_LOCALE];
}
