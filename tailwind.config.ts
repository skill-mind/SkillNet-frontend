import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
<<<<<<< HEAD
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  fontFamily: {
			'work-sans': ['"Work Sans"', 'sans-serif'],
			'ubuntu': ['"Ubuntu"', 'sans-serif'],
		  },
	
  	}
=======
    fontFamily: {
      sans: ["Ubuntu Sans"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#D0EFB1",
        grayText: "#ABABAB"
      },
      fontFamily: {
        customFont: [
          "Ubuntu",
          "UbuntuMedium",
          "UbuntuBold",
          "UbuntuLight",
        ],
        Ubuntu: ["Ubuntu"],
        UbuntuMedium: ["UbuntuMedium"],
        UbuntuBold: ["UbuntuBold"],
        UbuntuLight: ["UbuntuLight"],
      },
    },
>>>>>>> main
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
