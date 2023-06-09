const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');
const json = require('@rollup/plugin-json');
const image = require('@rollup/plugin-image');
const css = require('rollup-plugin-import-css');

module.exports = {
  input: 'src/api.js',
  output: {
    file: 'dist/bundle.development.mjs',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    babel({
      babelrc: true,
      exclude: 'node_modules/**',
    }),
    nodeResolve(),
    commonjs(),
    json(),
    image(),
    css(),
  ],
  cache: true,
};
