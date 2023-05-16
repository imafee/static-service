const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');
const { banner, footer } = require('./brand.cjs');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.min.cjs',
    format: 'cjs',
    sourcemap: true,
    banner: banner,
    footer: footer,
  },
  plugins: [
    babel({
      babelrc: true,
      babelHelpers: 'runtime',
      // exclude: 'node_modules/**',
    }),
    nodeResolve({ preferBuiltins: true }),
    commonjs(),
    terser(),
  ],
  external: [/@babel\/runtime-corejs\d+/],
  treeshake: true,
  cache: true,
  maxParallelFileOps: 30,
};
