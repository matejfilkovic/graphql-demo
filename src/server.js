const express = require('express')

const connect = require('./db')

const app = express()

connect()

app.get('/', (req, res) => (res.send('Hello!')))

app.all('*', (req, res) => {
  res.sendStatus(404)
})

module.exports = app
