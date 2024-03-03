const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to this server\n');
        return;
    }

    if(req.url === '/about'){
        res.end('about page');
        return;
    }

    res.end(`
    <h1> oops not found </h1>
    <a href="/">back home</a>`);
    return;
});

server.listen(5000);