//server.js
//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public/')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'view/midterm.html'));
});
app.get('/a.html', function(req, res){
  res.sendFile(path.join(__dirname, 'view/a.html'));
});
app.get('/mid2.html', function(req, res){
  res.sendFile(path.join(__dirname, 'view/mid2.html'));
});
app.get('/midterm.html', function(req, res){
  res.sendFile(path.join(__dirname, 'view/midterm.html'));
});
app.get('/modal-example.html', function(req, res){
  res.sendFile(path.join(__dirname, 'view/modal-example.html'));
});





//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});