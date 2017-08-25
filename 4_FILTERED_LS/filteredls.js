var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var extension = process.argv[3];

var extensionAux;

fs.readdir(dirPath, function(err, files) {
    if (err) throw err;

    files.forEach(function(fileName) {
        extensionAux = path.extname(fileName)
        
        if (extensionAux && 
            extensionAux.length >0 && 
            extensionAux.replace(/\./g,'') === extension) {
                console.log(fileName)

            }
    });

});
