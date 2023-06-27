/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black: "#000000",
      greenlight: "#71b130",
      icewhite: "#dadada",
      violet: "#5c3984",
      pink: "#f43841",
      orangelight: "#ffd109",
      orange: "#e9792b",
      punchwhite: "#e2cfac",
      bluelight: "#0fb6e8",
      green: "#5bba33",
      bisque: "#f2aa7c",
      gray: "#171717",
      transparent: "transparent"
    },
    fontFamily: {
      inter: ['var(--font-inter)', 'sans-serif'],
      teko: ['var(--font-teko)', 'sans-serif'],
      schoolbell: ['var(--font-schoolbell)', 'cursive']
    },
    fontSize: {
      sm: ['0.8rem'],
      base: ['1rem'],
      md: ['1.4rem'],
      '2xl': ['2rem'],
      '3xl': ['3rem'],
      '4xl': ['4rem'],
      '5xl': ['5rem']
    }
  },
  plugins: [],
}
