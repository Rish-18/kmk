import { useState, useEffect } from "react";
import type { ReactNode } from "react";

import { LanguageContext } from "./LanguageContext";
import type { LanguageContextType } from "./LanguageContext";

import en from "../locales/en.json";
import ar from "../locales/ar.json";

type Language = "en" | "ar";
type Translations = typeof en;

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Language>("en");

    const toggleLang = () => {
        const newLang = lang === "en" ? "ar" : "en";
        setLang(newLang);
        document.documentElement.lang = newLang;
        document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    };

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }, [lang]);

    const translations: Record<Language, Translations> = { en, ar };

    const t = (key: keyof Translations) => translations[lang][key] || key;

    const contextValue: LanguageContextType = {
        lang,
        toggleLang,
        t
    };

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
};
