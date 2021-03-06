// http uppercaserer
var http = require('http')
var fs = require('fs')
var port = process.argv[2]
var map = require('through2-map')

var server = http.createServer(function (req, res) {
	// request handling logic
  if (req.method === 'POST') {
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)
  }

})

server.listen(port)


// official answer

var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req,res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
