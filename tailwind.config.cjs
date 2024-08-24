/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-1": "url('/img/green-grass-bald-hill-mountain-scenic-park.jpg')",
        "bg-2": "url('/img/natural-sky-clouds-background.jpg')",
        "bg-3": "url('/img/sunrise-hilly-landscape_23-2147632843.jpg')",
        "bg-4": "url('/img/rainy-glass-pane.jpg')",
        "bg-5": "url('/img/natural-sky-1.jpg')",
        "bg-6": "url('/img/natural-sky-2.jpg')",
      },
      backgroundSize: {
        "bg-1": "cover",
        "bg-2": "cover",
        "bg-3": "cover",
        "bg-4": "cover",
        "bg-5": "cover",
        "bg-6": "cover",
      },
    },
  },
  variants: {},
  plugins: [],
}
