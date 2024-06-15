/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.line-through': {
          'position': 'absolute',
          'content': '""',
          'height': '4px',
          'background-color': '#4CAF50',
        },
        '.line-horizontal': {
          'top': '50%',
          'left': '0',
          'right': '0',
          'transform': 'translateY(-50%)',
        },
        '.line-vertical': {
          'top': '0',
          'bottom': '0',
          'left': '50%',
          'transform': 'translateX(-50%)',
        },
        '.line-diagonal1': {
          'top': '0',
          'left': '0',
          'bottom': '0',
          'right': '0',
          'transform': 'rotate(45deg)',
        },
        '.line-diagonal2': {
          'top': '0',
          'left': '0',
          'bottom': '0',
          'right': '0',
          'transform': 'rotate(-45deg)',
        },
      });
    },
  ],
}

