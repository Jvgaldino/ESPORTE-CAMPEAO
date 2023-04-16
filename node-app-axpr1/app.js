const express = require("express");
const url = require("url");
const http = require("http");
let port = express();
http.createServer(app).listen(port);
app.get("/saudacao", function (req,res){
var query = url.parse(req.url, true).query;
var name = query["name"] != undefined ? query["name"] : "Anônimo";

res.send("Saudações" + name);
});

app.get("/bye", function(req, res){
    res.send^("Adeus pra você também!");
});

app.get("/*", function(req, res){
    res.send("Rota inválida ...")
});