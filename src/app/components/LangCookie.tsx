"use client";

import { useEffect } from "react";
import { langCookie } from "@/i18n/negotiate";

/**
 * `data-set-lang` 이 붙은 언어 링크를 누르면 그 언어를 쿠키로 남긴다.
 * 홈의 언어 메뉴는 서버 컴포넌트의 그냥 링크라(크롤러가 따라가야 한다) 여기서 클릭만 듣는다.
 * 쿠키가 있어야 자동 언어 이동(middleware)이 직접 고른 언어를 다시 바꾸지 않는다.
 */
export default function LangCookie() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[data-set-lang]");
      const lang = a?.getAttribute("data-set-lang");
      if (lang) document.cookie = langCookie(lang);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
