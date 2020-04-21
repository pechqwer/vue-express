const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000'
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}