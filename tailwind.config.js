module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode:'class',
    theme: {
      extend: {
        screens:{
          "other":{'min': '340px', 'max': '1260px'},
        },
        colors: {
          darkbg:"#111827",
          blue:{
            850:"#1e40af",
          },
        },
      },
    },
    plugins: [],
  }