import { useRouter } from "next/router";
import i18n from "../public/i18n.json";

export default function useI18n() {
    // 获取当前访问页面路由的 pathname
    const { pathname } = useRouter();
    if (pathname === "/") {
        return i18n["en"];
    } else if (pathname === "/zh") {
        return i18n["zh"];
    } else if (pathname === "/kr") {
        return i18n["kr"];
    } else if (pathname === "/jp") {
        return i18n["jp"]
    } else {
        return i18n["en"];
    }
}