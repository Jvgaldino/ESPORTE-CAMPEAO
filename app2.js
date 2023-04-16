const http = require ("http");

let port = process.argv[2] || 3333;
function simpleHTTPResponder(req, res) {
    res.writeHead(200,{"Content-type": "text/plain"});
    res.end("Olá Mundo");
    console.log("Resposta HTTO enviada");
}

let serve = http.createServer(simpleHTTPRespoder);

serve.listen(port, function() {
    console.log("ouvindo na porta " + port);
});