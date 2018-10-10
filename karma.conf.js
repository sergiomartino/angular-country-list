module.exports = function (config) {
  config.set({
    basePath: '',
    singleRun: true,
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'tests/**/*.test.js'
    ],
    browsers: ['ChromeHeadless'],
    frameworks: ['jasmine'],
    client: { captureConsole: false },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.js$/i,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    },
    preprocessors: {
      '**/*.test.js': ['webpack']
    },
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    }
  });
};