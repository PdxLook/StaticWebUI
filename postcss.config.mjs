import UnoCSS from "@unocss/postcss";
import cssnano from "cssnano";
import postcssImport from "postcss-import"; // 使用 import 替代 require

export default {
  syntax: "postcss-scss",
  plugins: [
    postcssImport({
      path: ["src/scss"],
    }),
    UnoCSS(),
    cssnano(), // 压缩 CSS
  ],
};
