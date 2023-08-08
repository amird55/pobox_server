const express = require('express');
const port = 5252;
const app = express();
app.use(express.json());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const path = require('path');
//------------------------------------------------
let AllData=[];

//------------------------------------------------
app.get("/",(req, res) => {
    res.sendFile("./main.html", {root: __dirname});
});
app.get("/List",(req, res) => {
    res.send(AllData).json();
});
app.post("/Add",(req, res) => {
    let line={};
    line.name = req.body.name;
    line.phone = req.body.phone;
    line.pobox = req.body.pob;
    AllData.push(line);
    res.send("Ready to Add EndPoint");
});

//------------------------------------------------
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});
