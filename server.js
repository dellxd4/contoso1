var express =require("express");
var app=express();

var onAboutUs=function(req, res){
    res.send("This is Contoso about us");
};
var onDefault=function(req, res){
    res.send("<h1>Contoso Multinational Pvt. Ltd</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Public Cloud services</li>"+
                    " <li>Software as a Service</li>"+
                    " <li>Infrastructure as a Sevice</li>"+
                    " <li>Platform as a Service</li>"+
             "</ol>");
};
app.get("/",onDefault);
app.get("/aboutus",onAboutUs);
var server=app.listen(8081);
console.log("Server is running on port 8081"); 
