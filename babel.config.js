module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@stores': './src/stores',
            '@theme': './src/theme',  // Verifique se está assim
            '@utils': './src/utils',
            '@Highlight': './src/Highlight',
          },
        },
      ],
    ],
  };
};
