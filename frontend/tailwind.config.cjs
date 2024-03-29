/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height: {
        "88": "22rem",
        "112": "28rem",
      },
      colors: {
        "accent": "rgb(205, 127, 0)",
        "accent2": "rgb(72, 38, 20)",
        "accent-dark": "rgb(110, 69, 0)",
        "accent-light": "rgb(255, 245, 230)",
      },
      boxShadow: {
        "nav-shadow": "rgba(0, 0, 0, 0.6) 0px 5px 10px",
        "nav-shadow-white": "rgba(255, 255, 255, 1) 0px 5px 10px 10px",
        "chat": "rgba(0, 0, 0, 0.8) 0px 10px 20px",
        "calendar": "rgba(0, 0, 0, 0.2) 0 20px 20px -20px",
        "card": "rgba(205, 127, 0, 0.5) 0px 40px 35px -30px",
        "card-black": "rgba(0, 0, 0, 0.5) 0px 40px 35px -30px",
        "card-black-2": "rgba(0, 0, 0, 1) 0px 0px 25px 5px",
        "custom-1": "rgba(0, 0, 0, 0.25) 0px 0px 30px",
        "chat-msg": "rgba(0, 0, 0, 0.25) 0px 3px 5px",
        "chat-msg-sm": "rgba(0, 0, 0, 0.15) 0px 0px 5px",
        "green": "rgba(0, 255, 0, 0.5) 0px 20px 40px -20px",
        "yellow": "rgba(255, 242, 0, 0.5) 0px 20px 40px -20px",
        "blue": "rgba(37, 99, 235, 0.5) 0px 20px 40px -20px",
        "red": "rgba(255, 0, 0, 0.5) 0px 20px 40px -20px",
        "neutral": "rgba(175, 175, 175, 0.5) 0px 20px 40px -20px",
        "pink": "rgba(255, 0, 255, 0.5) 0px 20px 40px -20px",
      },
      gradientColorStops: {
        "nav-gradient": "rgba(0, 0, 0, 0.85)",
        "yellow-dark": "rgb(125, 119, 0)",
        "pink-dark": "rgb(100, 0, 100)",
      },
      backgroundImage: {
        "grade-school": "url('./assets/images/gradeSchool.webp')",
        "junior-high": "url('./assets/images/juniorHigh.webp')",
        "senior-high": "url('./assets/images/seniorHigh.webp')",
        "dagitab": "url('./assets/images/dagitab.webp')",
        "default": "url('./assets/images/pcsAnnex2.webp')",
      },
      transitionDelay: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1200": "1200ms",
        "1400": "1400ms",
        "1600": "1600ms",
      },
      transitionProperty: {
        "transform-opacity-filter": "transform, opacity, filter",
      },
      keyframes: {
        float: {
          "0": { transform: "translateY(0)", },
          "50%": { transform: "translateY(20px)", },
          "100%": { transform: "translateY(0)", },
        },
        expand: {
          "0": { scale: "1", opacity: "1" },
          "50%": { scale: "8", opacity: "1" },
          "100%": { scale: "1", opacity: "0" },
        },
        expand2: {
          "0": { scale: "1", opacity: "1" },
          "50%": { scale: "0.8" },
          "100%": { scale: "1", opacity: "0" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        expand: "expand .5s forwards",
        expand2: "expand2 .5s forwards",
      },
      scale: {
        '200': '1.75',
      },
    },
    fontFamily: {
      "gt-walsheim-pro-medium": "gt-walsheim-pro-medium, sans-serif"
    }
  },
  plugins: [],
}
