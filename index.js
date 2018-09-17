// we ar going to create a web server using the express package (npm install -- save express)
// now we will import (require) express
var express = require('express');
//create an instance of our web server app
var app = express();

//listen for a http request to the root of our Express web server
app.get('/',function(request,response){
  console.log('request made to root of the server');
  response.send('Home page will go here');
});


//now declare the port for our server to run on
app.listen(3000,function(){
  console.log('App running on port 3000');
});
