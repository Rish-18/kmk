import { createContext } from "react";
import en from "../locales/en.json";

type Language = "en" | "ar";
type Translations = typeof en;

export interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: keyof Translations) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
