var http = require('http')
var map = require('through2-map')
var outStream;

var server = http.createServer(function(request, response) {
    response.writeHead(200, { 'content-type': 'text/plain' })

    if (request.method === 'POST') {
        request.pipe(map(function(chunk){
            return chunk.toString().toUpperCase()
        })).pipe(response)
    } else {
        return response.end('Only POST requests please')
    }
})

server.listen(process.argv[2])
