import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1080px",
      xl: "1280px",
    },
    extend: {
      colors: {
        // 다크 기반 UI — 토마토가 주역이라 배경도 미세하게 웜톤
        ink: {
          DEFAULT: "#12100F", // 페이지 배경
          surface: "#1B1817", // 섹션 교차 배경
          raised: "#252120", // 카드
          line: "#332D2B", // 구분선
        },
        // 시그니처 컬러
        tomato: {
          DEFAULT: "#FF4834",
          dark: "#E23A27",
          soft: "#2A1714",
        },
        amber: {
          DEFAULT: "#FFB020",
          soft: "#2A2012",
        },
        jade: {
          DEFAULT: "#2FBF8F",
          soft: "#12261F",
        },
        cream: {
          DEFAULT: "#F5F1EF", // 본문
          muted: "#A39B97", // 보조
          dim: "#6E6663", // 캡션
        },
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // 알람이 울리는 맥박 — 히어로 시그니처
        ring: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.2)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 48s linear infinite",
        ring: "ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
