const express = require("express");
const http = require("http");
const websocket = require("ws");
if (process.argv.length < 3){
    console.log("Uso: node app.js <port>");
    process.exit(1);
}
const port  = process.argv[2];
const app = express();
app.use("/", function(req, res){
    res.sendFile("client/index.html",{ root: "./"});
});
const server = http.createServer(app);
const wss = new websocket.Server({ server});
wss.on("connection", function(ws){
    setTimeout(function(){
        console.log("Estado de conexão: " + ws.readyState);
        ws.send("Obrigado pela mensagem. --Seu servidor.");
        ws.close();
        console.log("Estado de conexão:" + ws.readyState);
    },2000);
    ws.on("message", function incoming(message){
        console.log("[LOG] " + message);
    });
}); 
server.listen(port);