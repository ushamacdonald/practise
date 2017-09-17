var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var rats = require('./routes/rats')

var server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/rats', rats)

module.exports = function(db) {
  server.set('db', db)
  return server
}
