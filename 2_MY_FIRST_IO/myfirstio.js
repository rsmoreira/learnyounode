var fs = require('fs');
var filePath = process.argv[2];
var fileBuffer = fs.readFileSync(filePath);
var splitFile = fileBuffer.toString().split('\n');

var enterCount = -1;

splitFile.forEach(function(element) {
    enterCount = enterCount + 1;
}, this);

console.log(enterCount);