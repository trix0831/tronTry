module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
      extend: {
        colors: {
          blue: {
            900: '#1a365d',
            800: '#2c5282',
            700: '#2b6cb0',
            600: '#3182ce',
            500: '#4299e1',
            400: '#63b3ed',
            300: '#90cdf4',
            200: '#bee3f8',
            100: '#ebf8ff',
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };