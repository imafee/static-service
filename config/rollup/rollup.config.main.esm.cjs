const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');
const json = require('@rollup/plugin-json');
const copy = require('rollup-plugin-copy');
const { banner, footer } = require('./brand.cjs');

module.exports = {
  input: 'src/api.js',
  output: {
    file: 'dist/bundle.min.mjs',
    format: 'es',
    sourcemap: true,
    banner: banner,
    footer: footer,
  },
  plugins: [
    copy({
      targets: [{ src: 'assets/**/*', dest: 'dist/assets' }],
    }),
    babel({
      babelrc: true,
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    nodeResolve({ preferBuiltins: true }),
    commonjs(),
    json(),
    terser(),
  ],
  // external: [/@babel\/runtime-corejs\d+/],
  treeshake: true,
  cache: true,
  maxParallelFileOps: 30,
};
