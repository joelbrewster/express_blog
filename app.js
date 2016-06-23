var express = require('express');
var bodyParser = require('body-parser'),
app = express(),
///if there is an environment variable called port, use that, else use port 3000
port = process.env.PORT || 3000,
//define a router for our application, NEEDS TO BE AFTER var app = express();

router = require('./config/routes');
// resourceRouter = require('./config/resourceRouter');
// authorsRouter = require('./config/authorsRouter');
morgan = require('morgan');

// morgan.token('type', function (req, res) { return req.headers['content-type'] })

//============= END OF REQURES ===========

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(function(request, response, next) {
//send custom stuff before this request goes to '/
console.log('%s request to %s from %s', request.method, request.path, request.ip);
  // if(request.ip === "192.168.1.4"){
  //   response.send(403);
  // } else {
    //middleware is finished - pass on to the router
    next();
  // }
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('combined'));

app.use('/', router);
// app.use('/posts', resourceRouter);
// app.use('/authors', authorsRouter);

// run the server
app.listen(port, function(){
  console.log('Server started on ' + port);
});

