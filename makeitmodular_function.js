var readAndPrint = require('./makeitmodular_mymodule');
var path = process.argv[2];
var ext = process.argv[3];

var callback = function(err, list){
    if (err)
        return callback(err)
    list.forEach(function(file) {
        console.log(file);
    })
}

readAndPrint(path, ext, callback);

// var filterFn = require('./solution_filter.js')
//     var dir = process.argv[2]
//     var filterStr = process.argv[3]
    
//     filterFn(dir, filterStr, function (err, list) {
//       if (err) {
//         return console.error('There was an error:', err)
//       }
    
//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })