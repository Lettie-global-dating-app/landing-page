"use client";

import React, { useEffect, useState } from "react";
import { LOCALES, LOCALE_NAMES, ROOT_LOCALE } from "@/i18n/config";
import { basePath, langCookie, pickTarget } from "@/i18n/negotiate";

/**
 * 하위 페이지(블로그·가이드·FAQ 등)의 언어 메뉴. 예전엔 한/영 토글뿐이었고 "English" 를 누르면 영어 홈으로 갔다.
 * 이제 12개 언어를 모두 보여 주고, 그 언어로 같은 페이지가 있으면 그 페이지로, 없으면 그 언어의 홈으로 간다.
 * 고른 언어는 쿠키로 남겨 자동 언어 이동(middleware)이 다시 바꾸지 않게 한다.
 * 홈은 12개 언어 메뉴를 헤더에 직접 그리므로 여기서는 숨긴다.
 */
export default function LanguageSwitcher() {
  const [path, setPath] = useState<string | null>(null);
  // 이 페이지가 <head> 에 내보낸 hreflang 대체 링크 — 어느 언어로 같은 글이 있는지의 정답이다(데이터에서 생성).
  // 슬러그가 언어마다 다른 글(/ja/blog/find-a-pen-pal ↔ /en/blog/how-to-find-a-pen-pal)도 이걸로 맞게 간다.
  const [alts, setAlts] = useState<Record<string, string>>({});

  useEffect(() => {
    setPath(window.location.pathname);
    const found: Record<string, string> = {};
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => {
      const lang = el.getAttribute("hreflang");
      const href = el.getAttribute("href");
      if (lang && href && lang !== "x-default") found[lang] = new URL(href, window.location.origin).pathname;
    });
    setAlts(found);
  }, []);

  // 서버 렌더링 시에는 아무것도 표시하지 않음
  if (path === null) return null;
  const trimmed = path.replace(/\/$/, "");
  if (trimmed === "" || /^\/[a-z]{2}$/.test(trimmed)) return null;

  const base = basePath(path, LOCALES);
  const seg = trimmed.split("/")[1];
  const current = (LOCALES as readonly string[]).includes(seg) ? seg : ROOT_LOCALE;
  const all = [ROOT_LOCALE, ...LOCALES];
  // 대체 링크가 있으면 그 페이지, 블로그 글인데 한/영판이 없으면 블로그 목록, 그 밖엔 그 언어의 같은 페이지나 홈
  const targetFor = (l: string) =>
    alts[l] ??
    ((l === ROOT_LOCALE || l === "en") && base.startsWith("/blog/") ? (l === "en" ? "/en/blog" : "/blog") : pickTarget(base, l, ROOT_LOCALE));

  return (
    <div style={{ position: "fixed", top: 24, right: 24, zIndex: 50 }}>
      <details style={{ position: "relative" }}>
        <summary
          aria-label="Language"
          style={{
            listStyle: "none",
            cursor: "pointer",
            background: "#FBF7EE",
            borderRadius: 9999,
            boxShadow: "0 2px 8px rgba(43,36,24,0.12)",
            border: "1px solid #E7D9B9",
            padding: "6px 14px",
            fontWeight: 600,
            fontSize: 14,
            color: "#F97159",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
          </svg>
          {LOCALE_NAMES[current]}
        </summary>
        <ul
          style={{
            position: "absolute",
            right: 0,
            marginTop: 8,
            width: 200,
            maxHeight: 360,
            overflowY: "auto",
            background: "#FBF7EE",
            border: "1px solid #E7D9B9",
            borderRadius: 16,
            boxShadow: "0 12px 32px rgba(43,36,24,0.18)",
            padding: 6,
            listStyle: "none",
          }}
        >
          {all.map((l) => (
            <li key={l}>
              <a
                href={targetFor(l)}
                hrefLang={l}
                lang={l}
                onClick={() => {
                  document.cookie = langCookie(l);
                }}
                style={{
                  display: "block",
                  padding: "8px 12px",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: l === current ? 700 : 500,
                  color: l === current ? "#F97159" : "#2B2418",
                  textDecoration: "none",
                }}
              >
                {LOCALE_NAMES[l]}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
