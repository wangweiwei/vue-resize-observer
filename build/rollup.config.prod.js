import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import cleanup from "rollup-plugin-cleanup";

export default {
  input: "./src",
  output: {
    file: "./dist/index.js",
    format: "umd",
    name: "__vue_resize_observer__",
    sourcemap: true
  },

  plugins: [
    buble(),
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    cleanup()
  ]
};
