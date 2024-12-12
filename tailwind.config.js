/** @type {import('tailwindcss').Config} */

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variable}), ${opacityValue})`;
    }
    return `hsl(var(${variable}))`;
  };
}

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: withOpacityValue("--primary"),
        },
        secondary: {
          DEFAULT: withOpacityValue("--secondary"),
          foreground: withOpacityValue("--secondary-foreground"),
        },
        gray: {
          DEFAULT: withOpacityValue("--gray"),
          foreground: withOpacityValue("--gray-foreground"),
        },
        wine: {
          DEFAULT: withOpacityValue("--wine"),
          foreground: withOpacityValue("--wine-foreground"),
        },
        blue: {
          DEFAULT: withOpacityValue("--blue"),
          foreground: withOpacityValue("--blue-foreground"),
        },
        yellow: {
          DEFAULT: withOpacityValue("--yellow"),
          foreground: withOpacityValue("--yellow-foreground"),
        },
        black: {
          DEFAULT: withOpacityValue("--black"),
          foreground: withOpacityValue("--black-foreground"),
        },
        white: {
          DEFAULT: withOpacityValue("--white"),
          foreground: withOpacityValue("--white-foreground"),
        },
      },
    },
  },
  plugins: [],
};
