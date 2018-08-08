var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');


app.get('/cars',function(request,response){
  response.render('cars.ejs');
})
app.get('/cats',function(request,response){
  response.render('cats.ejs');
})
app.get('/form',function(request,response){
  response.render('form.ejs');
})


// tell the express app to listen on port 2000, always put this at the end of your server.js file
app.listen(2000, function() {
    console.log("listening on port 2000");
    
  })
  
