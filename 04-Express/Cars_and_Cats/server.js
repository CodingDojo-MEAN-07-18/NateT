var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));







// tell the express app to listen on port 2000, always put this at the end of your server.js file
app.listen(2000, function() {
    console.log("listening on port 2000");
    
  })
  
