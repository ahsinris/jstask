const fs = require('fs')

fs.readFile('../','utf-8',(err,data))
if(err){
console.log("error",err)
return
}
console.log( data)