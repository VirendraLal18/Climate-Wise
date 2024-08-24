module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
      extend: {
        backgroundImage: {
          'bg1': "url(../Project_Images/green-grass-bald-hill-mountain-scenic-park.jpg)",
          'bg2': "url(../Project_Images/natural-sky-clouds-background.jpg)",
          'bg3': "url(../Project_Images/sunrise-hilly-landscape_23-2147632843.jpg)",
          'bg4': "url(../Project_Images/rainy-glass-pane.jpg)",
          'bg5': "url(../Project_Images/natural-sky-1.jpg)",
          'bg6': "url(../Project_Images/natural-sky-2.jpg)"

        },
        backgroundSize: {
          'bg1': "cover",
          'bg2': "cover",
          'bg3': "cover",
          'bg4': "cover",
          'bg5': "cover",
          'bg6': "cover",
        }
      },
    },
    variants: {},
    plugins: [],
  }