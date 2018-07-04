var http = require('http');

//A Class that represents a Client that can make 5 different requests Insert(I),Update(U),Get Domain Name(A),Get Domain IP (N),Delete(D)
//Uses data from the WebSites object that is passed as an argument and contains a Database of Names and Ips that can be used

class Client {
    
    
    constructor(clientNo, WebSites) {
        this.WebSites = WebSites;
        this.clientNo = clientNo;
        this.Values = ["I","U","A","N","D"];
        this.requestType = this.Values[Math.floor(Math.random() * this.Values.length)];
        console.log("Client " + this.clientNo + " Request Made: " + this.requestType);
        this.options = {
            host: "", //no host needed since it is automatically in localhost
            port: "1337",
            path: "/Pk.com",
            method: 'POST',
            headers: {
                'general': this.requestType,
                'ClientNo': this.clientNo
            }
        };

        //Create the callback variable
        this.Callback = function (response) {
            var body = '';
            response.on('data', function (data) {
                body += data;
            });

            response.on('end', function () {
                console.log(body.toString());
            });
        };
    
    }

    
    //A Method that sends a request to the local DNS
    //The request made is randomly chosen by choosing 1 random cell from the Values matrix
    //The request data is randomly chosen by choosing 1 random cell from the Names or Ips Matrix
    MakeRequest() {
        var Request = http.request(this.options, this.Callback);
            Request.on('error', (err) => {
                console.log(err);
            });
            if (this.requestType == 'A') {
                var Names = this.WebSites.Names;
                Request.write(Names[Math.floor(Math.random() * Names.length)]);
            }
            else if (this.requestType == 'N') {
                var Ips = this.WebSites.Ips;
                Request.write(Ips[Math.floor(Math.random() * Ips.length)]);
            }
            else if (this.requestType == 'I') {
                //have to add more non Existing Sites to the Client DB to randomly choose to add one
                var Names = this.WebSites.Names;
                var rand = Math.floor(Math.random() * Names.length);
                Request.write(Names[rand] + ",");
                var Ips = this.WebSites.Ips;
                Request.write(Ips[rand]);
            }
            else if (this.requestType == 'D') {
                var Names = this.WebSites.Names;
                var rand = Math.floor(Math.random() * Names.length);
                Request.write(Names[rand] + ",");
                var Ips = this.WebSites.Ips;
                Request.write(Ips[rand]);
            }
            else if (this.requestType == 'U') {
                var Ips = this.WebSites.Ips;
                var Names = this.WebSites.Names;
                var rand1 = Math.floor(Math.random() * Names.length);
                var rand2 = Math.floor(Math.random() * Names.length);
                Request.write(Names[rand1] + ",");  
                Request.write(Ips[rand1] + ",");
                Request.write(Names[rand2] + ",");
                Request.write(Ips[rand2]);


            }
        
        Request.end();
        };
};

module.exports = Client;
