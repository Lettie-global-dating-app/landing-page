"use client";

import React, { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [isEn, setIsEn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setMounted(true);
    const path = window.location.pathname.replace(/\/$/, "");
    setIsEn(path.startsWith("/en"));
    // 홈은 12개 언어 메뉴를 헤더에 직접 그린다. 여기의 한/영 토글은 블로그·가이드처럼 두 언어만 있는 페이지용.
    setIsHome(path === "" || /^\/[a-z]{2}$/.test(path));
  }, []);

  // 서버 렌더링 시에는 아무것도 표시하지 않음
  if (!mounted || isHome) {
    return null;
  }

  return (
    <div style={{ position: "fixed", top: 24, right: 24, zIndex: 50 }}>
      <div style={{ 
        background: "#FBF7EE", 
        borderRadius: 9999, 
        boxShadow: "0 2px 8px rgba(43,36,24,0.12)", border: "1px solid #E7D9B9", 
        display: "flex", 
        gap: 4, 
        padding: "4px 8px", 
        alignItems: "center" 
      }}>
        <button
          onClick={() => isEn && (window.location.href = "/")}
          style={{
            background: !isEn ? "#F97159" : "transparent",
            color: !isEn ? "white" : "#F97159",
            border: "none",
            borderRadius: 8,
            padding: "4px 12px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 14,
          }}
          disabled={!isEn}
        >
          한국어
        </button>
        <button
          onClick={() => !isEn && (window.location.href = "/en")}
          style={{
            background: isEn ? "#F97159" : "transparent",
            color: isEn ? "white" : "#F97159",
            border: "none",
            borderRadius: 8,
            padding: "4px 12px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 14,
          }}
          disabled={isEn}
        >
          English
        </button>
      </div>
    </div>
  );
} 