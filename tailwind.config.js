/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage:{
        'river-valley' : "url('/art/riverValley.JPG')",
        'beach-sunset' : "url('/art/beach-sunset.JPG')",
        'tranquil-stream': "url('/art/tranquil-stream.JPG')"
      },
      cursor:{
        '3d' : "url('/art/cursors/3d.png'),auto",
        'laptop' : "url('/art/cursors/laptop.png'),auto",
        'skull' :  "url('/art/cursors/skull.png'),auto",
        'monstercat' :  "url('/art/cursors/monstercat.png'),auto",

      },
      fontFamily:{
        'sans' : ["Ubuntu Sans","sans-serif"]
      }
    },
  },
  plugins: [],
}

