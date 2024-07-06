/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3b82f6',
        'custom-cyan': '#06b6d4',
        'dark-gray': '#374151',
        'dark-white': '#f3f4f6',
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, #5c0067 0%, #00d4ff 100%)',
      },
      borderRadius: {
        'custom-radius': '0.375rem',
      },
    },
  },
  plugins: [],
};
