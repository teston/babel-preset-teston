module.exports = function(){
  return {
    presets: [
      [require('@babel/preset-env'), {
        modules: false,
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
        },
      }],
    ],
    plugins: [
      require('@babel/plugin-proposal-class-properties'),
      require('@babel/plugin-syntax-dynamic-import'),
      require('@babel/plugin-transform-regenerator'),
      [require('@babel/plugin-transform-runtime'), {
        "regenerator": true
      }],
    ],
  };
};
