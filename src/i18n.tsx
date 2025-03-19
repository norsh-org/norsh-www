/**
 * i18n Configuration Module
 *
 * This module configures the i18next internationalization framework integrated with React via react-i18next.
 * It loads the English translation files and sets the default language and fallback language.
 *
 * @author Danthur Lice
 * @version 1.0.0
 * @since 1.0.0
 */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./i18n/en.json";
import pt from "./i18n/pt.json";
import common from './i18n/common.json';

const defaultLng: string = "pt";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
    common: { translation: common },
  },
  lng: defaultLng, // Default language
  fallbackLng: "common",
  interpolation: { escapeValue: false }
});

export const getLangFromPath = (pathname: string): string => {
  const parts = pathname.split("/"); 
  return parts[1] || defaultLng; 
};

export default i18n;
