// const {Pool,Client} = require("pg");
const http = require('http');
const path = require("path")
const express = require('express');
const app = express();
const server = http.createServer(app);
const clientPath = `${__dirname}/../client`;
app.use(express.static(clientPath));
app.use(express.json());

app.post("/api/graph", (req,res)=>{
    // console.log(req.body)
    var spawn = require("child_process").spawn; 
    var process = spawn('python',["../m.l/code.py", 
                            req.body.x, 
                            req.body.y,req.body.c] ); 
    process.stdout.on('data', function(data) { 
        console.log(data.toString()); 
    } ) 
    setTimeout(function(){ res.sendFile(__dirname+"/1.png") }, 1000);
})
app.post("/api/bar", (req,res)=>{
    // console.log(req.body)
    var spawn = require("child_process").spawn; 
    var process = spawn('python',["../m.l/bar.py", 
                            req.body.x, 
                            req.body.y,req.body.c] ); 
    process.stdout.on('data', function(data) { 
        console.log(data.toString()); 
    } ) 
    setTimeout(function(){ res.sendFile(__dirname+"/2.png") }, 1000);
})
app.post("/api/pie", (req,res)=>{
    console.log(req.body)
    var spawn = require("child_process").spawn; 
    var process = spawn('python',["../m.l/pie.py", 
                            req.body.x, 
                            req.body.y,req.body.c] ); 
    process.stdout.on('data', function(data) { 
        console.log(data.toString()); 
    } ) 
    setTimeout(function(){ res.sendFile(__dirname+"/3.png") }, 1000);
})
app.post("/api/histo", (req,res)=>{
    console.log(req.body)
    var spawn = require("child_process").spawn; 
    var process = spawn('python',["../m.l/histo.py", 
                            req.body.x, 
                            req.body.y,req.body.c] ); 
    process.stdout.on('data', function(data) { 
        console.log(data.toString()); 
    } ) 
    setTimeout(function(){ res.sendFile(__dirname+"/4.png") }, 1000);
})
server.listen(3000,() => {
    console.log("server is ready on port 3000")
})