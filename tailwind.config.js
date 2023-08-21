/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './src/storefront/**/*.{js,ts,jsx,tsx,mdx}',
    './src/adminapp/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}'

  ],
  theme: {
    extend: {
      minWidth : {
        "screen-half" : "50vw",
        "screen-3/4" : "40vw"
      }
    },
  },
  plugins: [],
  
}
