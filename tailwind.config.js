/** @type {import('tailwindcss').Config} */
module.exports = {
  important : true,
  corePlugins: {
    preflight: true,
  },
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
      },
      minHeight : {
        "96" : "24rem",
        "screen-1/2" : "50vh",
      },
      colors : {
        'primary' : '#000000',
      }
    },
  },
  plugins: [],
  
}
