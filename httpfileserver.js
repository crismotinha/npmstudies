var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var path = process.argv[3];
var dst = "";

var server = http.createServer(function(req, res){
    var src = fs.createReadStream(path, {encoding:'utf-8'})
    src.pipe(res);
})

server.listen(port);