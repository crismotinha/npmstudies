var net = require('net');
var port = process.argv[2];

var server = net.createServer(function(socket){
    var date = new Date()
    var year = date.getFullYear();
    function addZero(numero){
        if (numero < 10){
            return "0"+(numero+1).toString();
        }
        else {
            return (numero+1).toString();
        }
    }
    var month = addZero(date.getMonth());
    var day = addZero(date.getDate())-1;
    var hour = date.getHours()
    var minute = date.getMinutes()
    var data = year +"-"+ month +"-"+ day+ " "+ hour + ":"+ minute +"\n"
    // socket.write(data);
    socket.end(data);
})
server.listen(port);


    // var net = require('net')
    
    // function zeroFill (i) {
    //   return (i < 10 ? '0' : '') + i
    // }
    
    // function now () {
    //   var d = new Date()
    //   return d.getFullYear() + '-' +
    //     zeroFill(d.getMonth() + 1) + '-' +
    //     zeroFill(d.getDate()) + ' ' +
    //     zeroFill(d.getHours()) + ':' +
    //     zeroFill(d.getMinutes())
    // }
    
    // var server = net.createServer(function (socket) {
    //   socket.end(now() + '\n')
    // })
    
    // server.listen(Number(process.argv[2]))