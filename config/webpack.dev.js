var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = function(env) {
  return webpackMerge.smart(commonConfig(env), {

  })
}
