/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "accent": "rgb(205, 127, 0)",
        "accent-dark": "rgb(167, 107, 0)",
      },
      boxShadow: {
        "nav-shadow": "rgba(0, 0, 0, 0.25) 0px 3px 8px",
        "select": "rgb(205, 127, 0) 0px 0px 10px 0px",
      },
      gradientColorStops: {
        "nav-gradient": "rgba(0, 0, 0, 0.7)"
      },
      backgroundImage: {
        "pcs": "url('./assets/images/pcsMain.jpg')",
        "grade-school": "url('./assets/images/gradeSchool.gif')",
        "junior-high": "url('./assets/images/juniorHigh.gif')",
        "senior-high": "url('./assets/images/seniorHigh.gif')",
      },
      transitionDelay: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1200": "1200ms",
        "1400": "1400ms",
      },
      transitionProperty: {
        "transform-opacity-filter": "transform, opacity, filter"
      },
      keyframes: {
        float: {
          "0": { transform: "translateY(0)", },
          "50%": { transform: "translateY(20px)", },
          "100%": { transform: "translateY(0)", },
        }
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      scale: {
        '200': '1.75',
      }
    },
    fontFamily: {
      "torus-semibold": "torus-semibold",
      "torus-bold": "torus-bold",
    }
  },
  plugins: [],
}
