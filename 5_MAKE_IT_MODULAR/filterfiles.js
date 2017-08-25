var fs = require('fs');
var path = require('path')

var extensionAux;
var filteredFiles = []

module.exports = function (dirName, extension, callback) {

    fs.readdir(dirName, function(err, files) {
        if (err) return callback(err)

        files.forEach(function(fileName) {
            extensionAux = path.extname(fileName)
            
            if (extensionAux && 
                extensionAux.length >0 && 
                extensionAux.replace(/\./g,'') === extension) {
                    filteredFiles.push(fileName)
                }
        });
        
        callback(null, filteredFiles)

    });    

}; 
