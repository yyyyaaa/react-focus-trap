const webpackConfig = require('./webpack.config')

module.exports = function(config) {
  config.set({
    hostname: '0.0.0.0',

    browsers: ['Chrome'],

    frameworks: ['mocha'],

    files: ['test/*.js*'],

    reporters: ['progress'],

    preprocessors: {
      'test/*.js*': ['webpack']
    },

    webpack: {
      module: webpackConfig.module
    }
  })
}
