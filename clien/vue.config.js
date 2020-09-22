const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../server/src/public'),
  /* devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        secure: false,
      }
    },
    
  }, */
  "transpileDependencies": [
    "vuetify"
  ]
}