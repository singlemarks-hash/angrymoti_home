import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    // 지시서 §3: mobile < 768px < tablet < 1080px < pc
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1080px",
      xl: "1280px",
    },
    extend: {
      colors: {
        // 터닝 브랜드 그린 (추후 실제 브랜드 컬러로 교체)
        brand: {
          DEFAULT: "#00C471",
          dark: "#00A85F",
          deep: "#007A45",
          soft: "#E6F9F1",
          tint: "#F3FBF7",
        },
        accent: {
          orange: "#FF7A2F",
          marine: "#3D6BFF",
          pink: "#FF5C8D",
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
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
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
      },
      animation: {
        marquee: "marquee 48s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
