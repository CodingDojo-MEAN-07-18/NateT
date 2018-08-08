var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){

    //console.log('client request URL: ', request.url);
    
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }
    
    else if (request.url === "/cars") {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }

    else if(request.url === '/img/car1.png'){
        fs.readFile('img/car1.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/img/car2.png'){
        fs.readFile('img/car2.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/img/car3.png'){
        fs.readFile('img/car3.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        });
    }
    
    else if (request.url === "/cars/new") {
        fs.readFile('views/add.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
   
    else if (request.url === "/cats") {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }

    else if(request.url === '/img/cat1.png'){
        fs.readFile('img/cat1.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/img/cat2.png'){
        fs.readFile('img/cat2.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/img/cat3.png'){
        fs.readFile('img/cat3.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if (request.url === "/css/style.css") {
        fs.readFile('./css/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    }
    
    else {
        fs.readFile('views/error.html', 'utf8', function (errors, contents){
            response.writeHead(404, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });        
    }
});

server.listen(7077);
console.log("Running in localhost at port 7077");

