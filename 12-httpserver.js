const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req.headers.host)
    if (req.url === '/') {
        res.end("Welcome to our home page, Darling")
    } else if (req.url === '/about') {
        res.end("This is our history")
    } else {
    res.end(`<h1>This page does not exist</h1>
    <p>Sorry for inconvinience</p>
    <a href="/"><b>Go to main page</b></a>`)
    }
})
server.listen(3000, '127.0.0.1')