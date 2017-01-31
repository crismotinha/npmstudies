var fs = require('fs');
var path = require('path');

module.exports = function (dir, extension, callback) {
    fs.readdir(dir,function (err, list) {
        if (err){
            return callback(err);
        }
        var ext = "." + extension.toString();
        list = list.filter(function (file) {
            if (path.extname(file) == ext)
                return true;
        })
        return callback(null, list);
    });
}

//  var fs = require('fs')
//     var path = require('path')
    
//     module.exports = function (dir, filterStr, callback) {
//       fs.readdir(dir, function (err, list) {
//         if (err) {
//           return callback(err)
//         }
    
//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })
    
//         callback(null, list)
//       })
//     }

