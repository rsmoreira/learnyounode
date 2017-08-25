var fs = require('fs');

var filePath = process.argv[2];

var enterCount = -1;

fs.readFile(filePath, function(err, data) {
    if (err) throw err;

    splitFile = data.toString().split('\n');

    splitFile.forEach(function(element) {
        enterCount ++;
    });

    console.log(enterCount);

    // var lines = data.toString().split('\n').length - 1
    // console.log(lines)

});