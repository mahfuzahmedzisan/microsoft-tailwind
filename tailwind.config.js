/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    screens: {
      'xs': "480px",
      'sm': "640px",
      'md': "768px",
      'lg': "992px",
      'xl': "1024px",
      '2xl': "1280px",
      '3xl': "1440px",
      '4xl': "1600px",
      '5xl': "1920px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
    fontFamily: {
      body: ['Segoe UI','SegoeUI',"Helvetica Neue",'Helvetica','Arial','ui-sans-serif', 'system-ui', "Segoe UI Emoji", "Segoe UI Symbol", 'sans-serif'],
    },
    },
  },
  plugins: [],
}