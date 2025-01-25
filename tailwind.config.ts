import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Ubuntu Sans", "sans-serif"],
      workSans: ["Work Sans", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#D0EFB1",
        grayText: "#ABABAB",
      },
      fontFamily: {
        customFont: ["Ubuntu", "UbuntuMedium", "UbuntuBold", "UbuntuLight"],
        Ubuntu: ["Ubuntu"],
        UbuntuMedium: ["UbuntuMedium"],
        UbuntuBold: ["UbuntuBold"],
        UbuntuLight: ["UbuntuLight"],
      },
    },
  },
  plugins: [],
} satisfies Config;
