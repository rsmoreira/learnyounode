var http = require("http")

var urlRequest = process.argv[2]

http.get(urlRequest, function(res) {
    res.setEncoding("utf8")
    
    res.on('data', function(chunk) {
        console.log(chunk)
    })

}).on('error', function(e) {
    console.log("Got error: " + e.message);
});

