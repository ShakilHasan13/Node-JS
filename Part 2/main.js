let http = require("http");

let server = http.createServer((req, res) => {
    res.end("Hello World");
})
server.listen(3000);
console.log("Server runs successfully");


//We can write it like this:
/*let http = require("http");

http.createServer((req, res) => {
    res.end("Hello World!")
}).listen(3000);
console.log("Server runs successfully");*/

//control+C => To exit or to stop the running server

