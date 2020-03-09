const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlencodedParser = bodyParser.urlencoded({extended:false});

app.get('/register', urlencodedParser, (request,response) => {
    response.sendFile(__dirname + "/register.html");
});

app.post("/register", urlencodedParser, (request,response) => {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);

});

app.get('/', (request,response) => {
    response.send("Main page");
});
app.listen(3000);