const http = require('http');

const { readFileSync , writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt',  'utf8');
console.log(first);

const server = http.createServer((req,res)=>{

    res.write(`
    
        <h1>My name is usaamah</h1>
    
    `)
    res.end()
})
server.listen(8000)

