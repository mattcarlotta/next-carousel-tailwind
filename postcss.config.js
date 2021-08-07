module.exports = {
  // plugins: {
  //   ...(process.env.NODE_ENV === "production"
  //     ? {
  //         "@fullhuman/postcss-purgecss": {
  //           content: [
  //             "./node_modules/react-responsive-carousel/**/**/*.{css,scss}",
  //             // "./node_modules/name_package/**/**/*.{css,scss}"
  //             "./pages/**/*.js",
  //             "./Componets/**/*.js",
  //           ],
  //           defaultExtractor: (content) =>
  //             content.match(/[\w-/:]+(?<!:)/g) || [],
  //         },
  //       }
  //     : {}),
  //   tailwindcss: {},
  //   autoprefixer: {},
  // },
  plugins: [
    "tailwindcss",
    [
      "postcss-preset-env",
      {
        stage: 1,
        features: {
          "focus-within-pseudo-class": false,
        },
      },
    ],
  ],
};
