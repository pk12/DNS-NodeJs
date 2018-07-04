const ClientFast = require("./Client.js");
const Sites = require("./ClientData.js");
var WebSites = new Sites();
var i = 1;

//Creates a Client and sends a request to the Server
function CreateClient() {
    var clientFast = new ClientFast(i++, WebSites);
    clientFast.MakeRequest();
}

//Runs the function every (Math.random() * 1000) + 100 seconds
setInterval(function () { CreateClient(); }, (Math.random() * 5000) + 100)

   