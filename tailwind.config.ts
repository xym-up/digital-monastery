import type { Config } from "tailwindcss";

const config: Config = {
  // 关键点1：必须显式开启 class 策略，否则按钮无效
  darkMode: "class", 
  content: [
    // 关键点2：必须包含这三行，否则 Navbar 没样式
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;