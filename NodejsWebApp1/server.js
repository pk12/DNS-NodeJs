'use strict';
const Data = require("./ServerData.js");
var http = require('http');
var url = require('url');
var port = process.env.PORT || 1337;
var WebData = new Data();
var Ips = WebData.Ips;
var Names = WebData.Names;
var i = 1;

// Functions to handle each request type
function GetIp(data, response) {
    if (Names.includes(data)) {
        response.write(Ips[Names.indexOf(data)]);
    }
    else {
        response.write("Error, the requested IP was not found");
    }
}

function GetName(data, response) {
    if (Ips.includes(data)) {
        response.write(Names[Ips.indexOf(data)]);
    }
    else {
        response.write("Error, the requested Adress was not found");
        
    }
}

function InsertSite(Name, Ip, response) {
    if (!Names.includes(Name) && !Ips.includes(Ip)) {
        Names.push(Name);
        Ips.push(Ip);
        response.write("WebSite has been added successfully");
    }
    else {
        response.write("Error, Website Name or Ip is already registered");
    }
}

function DeleteSite(Name, Ip, response) {
    console.log(Names);
    if (Names.includes(Name) && Ips.includes(Ip)) {
        Names.splice(Names.indexOf(Name), 1);
        Ips.splice(Names.indexOf(Ip), 1);
        response.write("Site has been deleted");
    }
    else {
        response.write("Error, Name or Ip was not found");
    }
}

function UpdateSite(Name, Ip,NewName, NewIp, response) {
    if (Names.includes(Name) && Ips.includes(Ip)) {
        Names[Names.indexOf(Name)] = NewName;
        Ips[Ips.indexOf(Ip)] = NewIp;
        response.write("Ok, Changes made");
    }
    else {
        response.write("Error, changes could not be completed");
    }
}


// Server code starts here
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    //first we get the request data
    var path = url.parse(req.url);
    var data = "";
    console.log(path);
    req.on('data', (chunk) => {
        data += chunk;
    })
    req.on('end', () => {
       
    //handle each request
    if (req.headers['general'] == "A") {

        setTimeout(function () {
        GetIp(data, res);
        res.end();
        }, (Math.random() * 500) + 1000);
    }
    else if (req.headers['general'] == "N"){

        setTimeout(function () {
         GetName(data, res);
         res.end();
         }, (Math.random() * 500) + 1000);
    }
    else if (req.headers['general'] == "I") {

        setTimeout(function () {
            var newdata = data.split(",");
            console.log(newdata);
            InsertSite(newdata[0], newdata[1], res);
            res.end();
        }, (Math.random() * 2000) + 1000)
    }
    else if (req.headers['general'] == "D") {

        setTimeout(function () {
            var newdata = data.split(",");
            console.log(newdata);
            DeleteSite(newdata[0], newdata[1], res);
            res.end();
        }, (Math.random() * 2000) + 1000)
    }
    else if (req.headers['general'] == "U") {
        setTimeout(function () {
            var newdata = data.split(",");
            console.log(newdata);
            UpdateSite(newdata[0], newdata[1], newdata[2], newdata[3], res);
            res.end();
        }, (Math.random() * 1000) + 1000)
    }
    else {
         res.end();
    }
    

        
    })
    
    
    
    //then we submit our response

}).listen(port);


