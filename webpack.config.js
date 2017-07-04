var webpack = require('webpack')

module.exports = {
  entry: {
    'NoSleep': `${__dirname}/src/index.js`,
    'NoSleep.min': `${__dirname}/src/index.js`
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    library: 'NoSleep',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    }),
    new webpack.BannerPlugin({
      banner: `[name].js v0.7.0 - git.io/vfn01 - Rich Tibbett - MIT license`
    })
  ]
}
