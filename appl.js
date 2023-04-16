const fs = require("fs") ;
fs. readFile("./README.md", "utf-8", function (err, data) {
    if (err) throw err;
    console.log(data);
});