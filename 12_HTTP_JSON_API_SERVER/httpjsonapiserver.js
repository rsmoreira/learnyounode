var http = require('http')
var url = require('url')

var parsedUrl

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-type':'application/json'})
    parsedUrl = url.parse(request.url, true)
    
    var date = new Date(parsedUrl.query.iso)

    if (parsedUrl.pathname === '/api/parsetime') {
        response.end(getSplitDate(date))
    } else if (parsedUrl.pathname === '/api/unixtime') {
        response.end(getUnixDate(date))
    } else {
        response.writeHead(404)
        response.end()
    }
    
})

function getSplitDate(date) {
    return JSON.stringify(
        { 
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
        )
}

function getUnixDate(date) {
    return JSON.stringify({ unixtime: date.getTime() })
}

server.listen(process.argv[2])