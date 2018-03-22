const express = require('express')

const app = express()

app.get('/', (req, res) => (res.send('Hello!')))

app.all('*', (req, res) => {
  res.sendStatus(404)
})

module.exports = app
