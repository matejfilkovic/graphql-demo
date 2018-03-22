const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const DB_URL = 'mongodb://localhost/graphql-demo'

module.exports = () => {
  return mongoose.connect(DB_URL, { })
}
