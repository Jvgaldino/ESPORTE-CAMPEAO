const http = require("http");
const url = require("url");
let port = process.argv[2];
function simpleHTTPRespoder(req, res) {
    var uParts = url.parse(req.url, true); 
    if(uParts.pathname == "/saudacao") {
        res.writeHead(200, { "content-Type":"text/plain" });
        var query = uParts.query;
        var name = "Anonymous";
        if (query["name"] != underfined) {
            name = query["name"];
        }
        res.end(" Saudação " + name);
     } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Apenas / saudacao foi implementado.");
     }
}
let server = http.createServer(simpleHTTPRespoder);
server.listen(port, function(){
    console.log("ouvindo na porta" + port);
});