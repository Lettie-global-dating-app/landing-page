"use client";

import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [isEn, setIsEn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsEn(window.location.pathname.startsWith("/en"));
  }, []);

  // 서버 렌더링 시에는 아무것도 표시하지 않음
  if (!mounted) {
    return null;
  }

  return (
    <div style={{ position: "fixed", top: 24, right: 24, zIndex: 50 }}>
      <div style={{ 
        background: "white", 
        borderRadius: 9999, 
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)", 
        display: "flex", 
        gap: 4, 
        padding: "4px 8px", 
        alignItems: "center" 
      }}>
        <button
          onClick={() => isEn && (window.location.href = "/")}
          style={{
            background: !isEn ? "#4f46e5" : "transparent",
            color: !isEn ? "white" : "#4f46e5",
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
            background: isEn ? "#4f46e5" : "transparent",
            color: isEn ? "white" : "#4f46e5",
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