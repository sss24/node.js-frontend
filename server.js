"use strict";

const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response) {
    if(request.url == '/style.css') {
        const css = fs.readFileSync('style.css');
        response.end(css);
    } else {
        const html = fs.readFileSync('index.html');
        response.end(html);
    }
});

server.listen(process.env.PORT || 3000);
console.log('Server started');