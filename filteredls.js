var fs = require('fs');
var path = require('path');
var path2 = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(path2,function (err, data) {
    if (err){
        console.log(err)
    }
    for (var i = 0; i<data.length; i++){
        if (path.extname(data[i]) == ext)
            console.log(data[i]);
    }
});

