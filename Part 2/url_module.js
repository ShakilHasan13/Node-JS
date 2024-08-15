//url module is used to cut and separate the 
//elements of a url.
//There are basically three parts of a url
//host, path, searchquery

let http = require("http");
const path = require("path");
let URL = require("url");

http.createServer((req, res) => {
    let myURL = "http//:shakilhasan.com/blog.html?year=2024&month=july";

    let myURLobj = URL.parse(myURL, true);
    let hostName = myURLobj.host;
    let pathName = myURLobj.pathname;
    let searchQuery = myURLobj.search;
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(hostName); //as there is no real host named this url, this part  won't work
    //res.write(pathName);
    //res.write(hostName);
    res.end();
}).listen(5050);
console.log("Success!");