/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],

  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['SF Pro Display', 'sans-serif'],
      },
      lineHeight: {
        'custom': '100.24px',
      },
      boxShadow: {
        'custom': 'var(--sds-size-depth-0) var(--sds-size-depth-100) var(--sds-size-depth-100) var(--sds-size-depth-negative-025) var(--sds-color-black-200)',
      },
      keyframes: {
        'slide-up': {
          '0%': {
            transform: 'translateY(50px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.6s ease-out forwards', // Custom animation
      },
    },
  },
  plugins: [],
}

