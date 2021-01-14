// npm install postcss-loader autoprefixer css-mqpacker cssnano --save-dev
module.exports = {
  //parser: "sugarss",
  pluggins: [
    //require('autoprefixer'),
    require("css-mqpacker"),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
