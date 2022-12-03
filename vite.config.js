const path = require('path')

export default {
  root: path.resolve(__dirname, 'res'),
  alias: {
  },
  server: {
    host: 'sikessem.test',
    port: 4444,
    hot: true
  }
}
