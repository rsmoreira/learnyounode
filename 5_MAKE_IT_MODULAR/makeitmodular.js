var filterfiles = require('./filterfiles')

var dirPath = process.argv[2]
var extension = process.argv[3]

filterfiles(dirPath, extension, 
    function(err, data) {
        if (err) return console.log(err)
        
        if (data && 
            data instanceof Array && 
            data.length > 0) {
        
                data.forEach(function(element) {
                    console.log(element)
                }, this)
        
            }
    });
