var http = require('http');
var bl = require('bl');
var str = [];
var counting = 0;

function print(){
    for (var i = 0; i < str.length; i++){
        console.log(str[i]);
    }
}
function httpGet (index){
    http.get(process.argv[2 + index], function (response){
        response.pipe(bl(function (err, data){
            if (err)
                return console.log(err)
            str[index] = data.toString()
            counting++
            if (counting == 3){
                print();
            }
        }))
    })
}

for (var i=0; i<3; i++){
    httpGet(i);
}