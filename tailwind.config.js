/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './storefront/**/*.tsx',
    './adminapp/**/*.tsx',
    './app/**/*.tsx'

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
