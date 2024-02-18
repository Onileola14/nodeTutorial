const http = require('http')

const server = http.createServer((req,res)  => {

    
    if (req.url === '/') {

        res.end('welcome to the home page')
        
    }

    if (req.url === '/about') {

        res.end('here is our history')
        
    }

    res.end(`


        <h1>oops!!!</h1>
        <p>we can't see to find the page you are looking for</p>
        <a href= '/'>back to home page </a>


    `)
server.listen(8000)


})