module.exports = function (api) {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          // browsers: 'last 2 versions, >2%, chrome >=80, safari >=12',
          node: '14',
        },
        useBuiltIns: 'usage',
        corejs: 3,
        modules: false, // 关闭es转为其他模块化操作，由rollup来做
        loose: false, // false风格更接近es标准语义，true风格更接近开发者手写
        bugfixes: true, // 语法特性转换，从而导致更小的生成体积
        ignoreBrowserslistConfig: true, // 忽略browserslist的解析器，改用bable自己的解析器
      },
    ],
  ];
  const plugins = [
    [
      // 共享polyfill，使得打包体积更小
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        proposals: true,
      },
    ],
  ];

  if (process.env['ENV'] === 'prod') {
    // todo
  }

  return {
    presets,
    plugins,
  };
};
