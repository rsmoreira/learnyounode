var http = require("http")
var bufferList = require("bl")

var urlRequest = process.argv[2]

http.get(urlRequest, function(res) {
    
    res.pipe(bufferList(function(err, data) {
        if (err) 
            return console.error("Got an error " + err.message)
        console.log(data.length)    
        console.log(data.toString())
    
    }));

}).on('error', function(e) {
    console.log("Got error: " + e.message);
});
