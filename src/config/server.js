const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryPaser = require('express-query-int')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryPaser())

server.listen(process.env.PORT || port, function() {
    console.log(`backEnd is running is ${port}`)
})

module.exports = server