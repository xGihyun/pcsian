/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "accent": "rgb(205, 127, 0)",
      },
      boxShadow: {
        "nav-shadow": "rgba(0, 0, 0, 0.6) 0px 5px 10px",
        "chat": "rgba(0, 0, 0, 0.8) 0px 10px 20px",
      },
      gradientColorStops: {
        "nav-gradient": "rgba(0, 0, 0, 0.7)"
      },
      backgroundImage: {
        "grade-school": "url('./assets/images/gradeSchool.webp')",
        "junior-high": "url('./assets/images/juniorHigh.webp')",
        "senior-high": "url('./assets/images/seniorHigh.webp')",
      },
      transitionDelay: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1200": "1200ms",
        "1400": "1400ms",
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
          "50%": { scale: "6", opacity: "1" },
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
      "torus-semibold": "torus-semibold, sans-serif",
      "torus-bold": "torus-bold",
      "torus-regular": "torus-regular, sans-serif"
    }
  },
  plugins: [],
}
