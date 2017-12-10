const env = process.env.NODE_ENV || 'production',
      packageJson  = require('../package.json'),
      path = require('path')


global.App = {
  port : process.env.PORT || 8080,
  version : packageJson.version,
  root : path.join(__dirname, '..')
}
