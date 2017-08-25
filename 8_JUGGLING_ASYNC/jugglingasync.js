var http = require("http")
var bufferList = require("bl")

var results = [];
var count = 0

function printResults() {
    results.forEach(function(element) {
        console.log(element)
    })
    
}

function adjustResponse(index, response) {
    response.pipe(bufferList(function(err, data) {
        if (err) 
            return console.error("Got an error " + err.message)
        results[index] = data.toString();
        count ++
        if (count == 3) {
            printResults()
        }
    }));
}

http.get(process.argv[2], function(res) {
    adjustResponse(0, res);
})

http.get(process.argv[3], function(res) {
    adjustResponse(1, res);
})


http.get(process.argv[4], function(res) {
   adjustResponse(2, res);
})