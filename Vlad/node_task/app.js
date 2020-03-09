const http = require('http');
const fs = require('fs');

http.createServer((request,response) => {
    fs.readFile("index.html", "utf8", function(error,data){
        let message ="I'm learning Node.js";
        let header = "Main page";
        data = data.replace('{header}', header).replace("{message}", message);
        response.end(data);
    })
}).listen(3000);