import { useRouter } from "next/router";
import i18n from "../public/i18n.json";

export default function useI18n() {
  // 获取当前访问页面路由的 pathname
  const { pathname } = useRouter();
  const languageMap = {
    "/": "en",
    "/zh": "zh",
    "/kr": "kr",
    "/jp": "jp",
  };
  const language = languageMap[pathname] || "en";
  return i18n[language];
}
