let http = require("http");

http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h2>This is HomePage</h2>");
        res.end();
    } else if (req.url == "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("This is About Page");
        res.end();

    } else if (req.url == "/contact") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("This is Contact Page");
        res.end();

    }
}).listen(3000);
console.log("Server runs successfully");