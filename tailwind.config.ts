import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx", "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [`var(--font-noto-sans)`, ...fontFamily.sans],
        mono: [`var(--font-noto-sans-mono)`, ...fontFamily.mono],
      },
    },
  },
  plugins: [],
} satisfies Config;
