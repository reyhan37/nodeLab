"use strict";
const http = require("http");
const myModule = require("./my-module");

http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/plain"});
    res.write(myModule.randomVerse);
    // res.write("hello");
    res.end();
}).listen(3000);