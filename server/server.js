/**
 * Created by jbc on 09/10/2016.
 */
var express = require('express');
var http = require ('http');

var list = require('./data');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json() );   // to support JSON-encoded bodies
app.use(bodyParser.urlencoded());   // to support URL-encoded bodies

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});

app.set('views', './');

var port = '3002';

app.set('port', port);

var getByName = function(name, inList){
  console.log('inList', inList);
  return inList.find(function(item){return item.name == name});
};

app.get('/phones', function(req,res){
  res.send(JSON.stringify(list));
});

app.get('/phones/:name', function(req,res){
  res.send(JSON.stringify(getByName(req.params['name'], list)));
});

http.createServer(app).listen(port, function (err) {
  console.log('listening in http://localhost:' + port);
});
