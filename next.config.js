const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withPlugins([
  [
    withImages,
    {
      fileExtensions: [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "webp",
      ],
    },
  ],
  [
    withReactSvg,
    {
      include: path.resolve(__dirname, "src/assets/img/icons/"),
    },
  ],
]);
