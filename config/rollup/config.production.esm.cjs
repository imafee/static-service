const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');
const json = require('@rollup/plugin-json');
const image = require('@rollup/plugin-image');
const { banner, footer } = require('./brand.cjs');
const css = require('rollup-plugin-import-css');

module.exports = {
  input: 'src/api.js',
  output: {
    file: 'dist/bundle.production.mjs',
    format: 'es',
    sourcemap: true,
    banner: banner,
    footer: footer,
  },
  plugins: [
    babel({
      babelrc: true,
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    nodeResolve({ preferBuiltins: true }),
    commonjs(),
    json(),
    image(),
    css(),
    terser(),
  ],
  // external: [/@babel\/runtime-corejs\d+/],
  treeshake: true,
  // cache: true,
  // maxParallelFileOps: 30,
};
