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

app.get('/cats/1',function(request,response){
  var catDetails = {'name': 'Boozy Cat', 
                    'image': "/img/cat1.png",
                    'owner': "Betty Ford", 
                    'age': 1, 
                    "crimes":['Throwing up in public','Purring under the influence','Not landing on all 4 paws']                    
                  }
  response.render("cat_details.ejs",{'data':catDetails})
})

app.get('/cats/2',function(request,response){
  var catDetails = {'name': 'Hippy Cat', 
                    'image': "/img/cat2.png",
                    'owner': "Jerry Garcia", 
                    'age': 4, 
                    "crimes":['Being too nice','Forgetting','20 pounds of catnip']                    
                  }
  response.render("cat_details.ejs",{'data':catDetails})
})

app.get('/cats/3',function(request,response){
  var catDetails = {'name': 'Lazy Cat', 
                    'image': "/img/cat3.png",
                    'owner': "Bob Marley", 
                    'age': 6,
                    "crimes":['Pooping outside the box','Scratching the sofa','Not a good mouse hunter']                    
                  }
  response.render("cat_details.ejs",{'data':catDetails})
})

app.get('/form',function(request,response){
  response.render('form.ejs');
})

// tell the express app to listen on port 2000, always put this at the end of your server.js file
app.listen(2000, function() {
    console.log("listening on port 2000");
    
  })
  
