const path = require('path')
const env = process.env.NODE_ENV
const inDev = env === 'dev' || env === 'development'

module.exports = (env, argv) => ({
  mode: !inDev ? 'production' : 'development',
  devtool: !inDev ? false : 'source-map',
  entry: {
    core: './app/src/js/core',
    'river-and-sea-levels': './app/src/js/pages/river-and-sea-levels',
    station: './app/src/js/pages/station'
  },
  output: {
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  target: ['web', 'es5']
})
