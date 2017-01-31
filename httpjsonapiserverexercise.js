var http = require('http');
var url = require('url');
var port = process.argv[2];
var result;

function parseTime(time){
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime(time){
    return {unixtime: time.getTime()}
}

var server = http.createServer(function(req, res){
    if (req.method == 'GET'){
        var urlObject = url.parse(req.url, true);
        var time = new Date(urlObject.query.iso);
        
        if (urlObject.pathname == "/api/parsetime"){
            result = parseTime(time);
        }
        else if(urlObject.pathname == "/api/unixtime"){
            result = unixtime(time);
        }
        
        if (result){
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(result));
        } else {
        res.writeHead(404)
        res.end()
      }
    }
})

server.listen(port);