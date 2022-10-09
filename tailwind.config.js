/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"]
    },
    extend: {
      colors: {
        primaryLight: "#0404ff",
        primaryDark: "#07079F"
      },
      spacing: {
        128: "32rem",
        144: "36rem"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))"
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  },
  variants: {
    extend: {
      translate: ["group-hover", "hover"]
    }
  }
};
