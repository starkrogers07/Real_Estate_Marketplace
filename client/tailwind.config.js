/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    // Add more file paths if necessary
  ],
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
  // Other Tailwind CSS configurations...
};
