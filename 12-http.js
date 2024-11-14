const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to home page');
    }
    if(req.url === '/about') {
        res.end('Here is our history');
    }
    res.end(`
    <h1>Opps!</h1>
    <p>We can't seem to find your page</p>
    <a href="/">Back home</a>
    `)
});

server.listen(3000);