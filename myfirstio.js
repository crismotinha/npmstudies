var fs = require('fs');
var file = (fs.readFileSync(process.argv[2])).toString();

var filearray = file.split('\n');

var total = 0;

for (var i = 0; i < filearray.length; i++){
    total =+ i;
}

console.log(total)