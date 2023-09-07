import { useRouter } from "next/router";
import i18n from "../public/i18n.json";

export default function useI18n() {
  const { pathname } = useRouter();
  const languageMap = {
    "/": "en",
    "/zh": "zh",
    "/kr": "kr",
    "/jp": "jp",
    "/ru": "ru",
  };
  const language = languageMap[pathname] || "en";
  return i18n[language];
}
