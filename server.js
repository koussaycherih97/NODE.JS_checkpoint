let http = require ('http')
let fs = require ('fs')

http.createServer((req,res)=>{
    res.end('hello')
}).listen(5000,console.log('server alive'))

fs.writeFile('welcome.txt','hello node', (err)=> {if (err){throw err}})
fs.readFile('./welcome.txt', utf-8 , (err,data)=>{
    if (err) {console.log(err)} ;
    console.log(data)
})

var generator = require('generate-password') ;
var passwords = generator.generateMultiple(5, {
    length:10 ,
    uppercase: false
})

console.log(passwords);