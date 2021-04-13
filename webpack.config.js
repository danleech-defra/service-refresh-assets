const path = require('path')
const inDev = true

module.exports = (env, argv) => ({
  mode: !inDev ? 'production' : 'development',
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
  }
})
