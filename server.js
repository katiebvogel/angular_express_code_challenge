var express = require('express');

var index = require('./routes/index');
var main = require('./routes/main');

var app = express();


app.use(express.static('public'));

//Routers
app.use('/', index);
app.use('/main', main);


var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
