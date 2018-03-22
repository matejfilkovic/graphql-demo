const express = require('express')
const { graphiqlExpress } = require('apollo-server-express')

const { graphQLRouter } = require('./api')
const setupMiddleware = require('./middleware')
const connect = require('./db')

const app = express()

connect()
setupMiddleware(app)

app.get('/', (req, res) => (res.send('Hello!')))
app.use('/graphql', graphQLRouter)
app.use('/docs', graphiqlExpress({ endpointURL: '/graphql' }))

app.all('*', (req, res) => {
  res.sendStatus(404)
})

module.exports = app
