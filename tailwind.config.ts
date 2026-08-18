import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Olive #34412D → buttons, logo, navigation accents
        olive: {
          50: "#f5f7f3",
          100: "#e8ede4",
          200: "#d3dccb",
          300: "#b5c4a9",
          400: "#8e9e7f",
          500: "#4f6344",
          600: "#3e4f35",
          700: "#34412D",
          800: "#273221",
          900: "#1d2519",
          950: "#11170f",
        },
        // Travertine Cream #F4F0E6 → main background
        cream: {
          50: "#FAF8F3",
          100: "#F4F0E6",
          200: "#EAE3D2",
          300: "#DED4BC",
        },
        // Warm Stone #D8D0BE → cards/sections
        warmstone: {
          50: "#F7F5EF",
          100: "#EBE6DA",
          200: "#D8D0BE",
          300: "#C4BAA3",
          400: "#ABA088",
          500: "#92866D",
          600: "#756B55",
          700: "#5A5240",
          800: "#3E382B",
          900: "#242018",
        },
        // Charcoal #252522 → headings/body text
        charcoal: {
          50: "#8F8F89",
          100: "#757570",
          200: "#5E5E58",
          300: "#484843",
          400: "#343430",
          500: "#252522",
          600: "#20201D",
          700: "#1B1B18",
          800: "#141412",
          900: "#0D0D0C",
        },
        // Muted Sage #78816A → secondary UI elements
        sage: {
          50: "#f6f7f4",
          100: "#e9ebe4",
          200: "#d4d8cb",
          300: "#b9bfad",
          400: "#98a287",
          500: "#78816A",
          600: "#636c56",
          700: "#4e5643",
          800: "#3b4132",
          900: "#272c21",
        },
        // Neutral stone aliases
        stone: {
          50: "#F4F0E6",
          100: "#EBE6DA",
          200: "#D8D0BE",
          300: "#C4BAA3",
          400: "#98a287",
          500: "#78816A",
          600: "#484843",
          700: "#34412D",
          800: "#252522",
          900: "#1b1b18",
          950: "#141412",
        },
        roman: {
          50: "#f5f7f3",
          100: "#e8ede4",
          200: "#d3dccb",
          300: "#b5c4a9",
          400: "#8e9e7f",
          500: "#4f6344",
          600: "#3e4f35",
          700: "#34412D",
          800: "#273221",
          900: "#1d2519",
          950: "#11170f",
        },
        gold: {
          50: "#f6f7f4",
          100: "#e9ebe4",
          200: "#d4d8cb",
          300: "#b9bfad",
          400: "#98a287",
          500: "#78816A",
          600: "#636c56",
          700: "#4e5643",
          800: "#3b4132",
          900: "#272c21",
          950: "#181411",
        },
        canal: {
          blue: "rgb(var(--color-canal-blue) / <alpha-value>)",
          primary: "rgb(var(--color-canal-primary) / <alpha-value>)",
          orange: "rgb(var(--color-canal-primary) / <alpha-value>)",
          ink: "rgb(var(--color-canal-ink) / <alpha-value>)",
          navy: "#252522",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Outfit", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        mosaic:
          "radial-gradient(circle at 15% 25%, rgba(52,65,45,0.25) 0, transparent 45%), radial-gradient(circle at 85% 15%, rgba(120,129,106,0.22) 0, transparent 45%), radial-gradient(circle at 50% 85%, rgba(37,37,34,0.60) 0, transparent 50%)",
        "arena-pattern":
          "radial-gradient(circle at 50% 0%, rgba(120,129,106,0.18) 0%, transparent 60%), radial-gradient(circle at 50% 100%, rgba(52,65,45,0.14) 0%, transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(52, 65, 45, 0.30)",
        "gold-glow": "0 0 35px -5px rgba(120, 129, 106, 0.30)",
        "blue-glow": "0 0 35px -5px rgba(52, 65, 45, 0.30)",
        "amber-glow": "0 0 35px -5px rgba(120, 129, 106, 0.30)",
      },
    },
  },
  plugins: [],
};
export default config;
