module.exports = {
  screens: {
    '2xl': { max: '1535px' },
    xl: { max: '1279px' },
    lg: { max: '1023px' },
    md: { max: '767px' },
    sm: { max: '639px' },

    minsm: { min: '640px' },
    minmd: { min: '768px' },
    minlg: { min: '1024px' },
    minxl: { min: '1280px' },
    min2xl: { min: '1536px' },
  },
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Josefin': ['Josefin Sans', 'sans-seris'],
    },
    backgroundImage: {
      "desktop-light": "url('/images/bg-desktop-light.jpg')",
      "desktop-dark": "url('/images/bg-desktop-dark.jpg')",
      "phone-light":"url('/images/bg-mobile-light.jpg')",
      "phone-dark":"url('/images/bg-mobile-light.jpg')",
    },
  },
  colors:{
    "bright-blue":'hsl(220, 98%, 61%)',
    "check-bg":'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
  },
  plugins: [],
}

