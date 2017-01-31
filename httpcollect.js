var http = require('http');
var url = process.argv[2];
var list = "";


http.get(url, function callback(response){
    response.setEncoding('utf-8');
    response.on('data', function(data){
        list+=(data.toString());
        
    })
    response.on('end', function(){
        console.log(list.length + '\n' + list);    
    })
    
})
