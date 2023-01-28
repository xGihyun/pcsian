/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "accent": "rgb(205, 127, 1)"
      },
      boxShadow: {
        "nav-shadow": "rgba(0, 0, 0, 0.25) 0px 3px 8px"
      },
      gradientColorStops: {
        "nav-gradient": "rgba(0, 0, 0, 0.7)"
      },
      backgroundImage: {
        "pcs": "url('./assets/images/pcsMain.jpg')"
      },
      transitionDelay: {
        "400": "400ms",
      },
      transitionProperty: {
        "transform-opacity-filter": "transform, opacity, filter"
      }
    },
  },
  plugins: [],
}
