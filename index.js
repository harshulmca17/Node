var fs = require('fs');
var count = require('./stuff');
fs.writeFileSync('output.txt',count([1,2,3,4]));

console.log('Auth commit');
setTimeout(function(){
    console.log('jkhjkh');
},3000);
