module.exports = {
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
    },
  },
  colors:{
    "bright-blue":'hsl(220, 98%, 61%)',
    "check-bg":'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
    'lm-Light-Gray': 'hsl(0, 0%, 98%)',
    'lm-Light-Grayish-Blue': 'hsl(236, 33%, 92%)',
    'lm-Grayish-Blue': 'hsl(233, 11%, 84%)',
    'lm-Grayish-Blue': 'hsl(236, 9%, 61%)',
    'lm-Dark-Grayish-Blue': 'hsl(235, 19%, 35%)',
    'dm-Dark-Blue': 'hsl(235, 21%, 11%)',
    'dm-Dark-Desaturated Blue': 'hsl(235, 24%, 19%)',
    'dm-Grayish-Blue': 'hsl(234, 39%, 85%)',
    'dm-Grayish-Blue-(hover)': 'hsl(236, 33%, 92%)',
    'dm-Grayish-Blue': 'hsl(234, 11%, 52%)',
    'dm-Dark-Grayish-Blue': 'hsl(233, 14%, 35%)',
    'dm-Dark-Grayish-Blue': 'hsl(237, 14%, 26%)',
  },
  plugins: [],
}

