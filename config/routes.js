var express = require('express'),
router = express.Router();

//respond to a request of Get on '/
router.get('/', function(request, response){
  // response.send('Hello world');
  response.render('index', {title: 'Home Page'});
});

router.get('/contact', function(request, response){
  // response.send('Hello world');
  response.render('index', {title: 'Contact'});
});

router.get('/about',function(request, response){
  response.render('index', {title: 'About'});
})

module.exports = router;
