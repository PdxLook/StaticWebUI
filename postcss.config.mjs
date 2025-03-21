import UnoCSS from "@unocss/postcss";
import cssnano from "cssnano";
import postcssImport from "postcss-import";
import postcssPresetEnv from "postcss-preset-env";

export default {
  syntax: "postcss-scss",
  parser: "postcss-scss",
  plugins: [
    postcssImport({
      path: ["static_assets/scss"],
    }),
    postcssPresetEnv({
      features: {
        "nesting-rules": true,
        "custom-properties": true,
        "custom-media-queries": true,
        "media-query-ranges": true,
        "custom-selectors": true,
        "gap-properties": true,
        "not-pseudo-class": true,
        "focus-visible-pseudo-class": true,
        "focus-within-pseudo-class": true,
        "color-functional-notation": true,
      },
    }),
    UnoCSS(),
    cssnano(),
  ],
};
