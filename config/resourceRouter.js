var express = require("express"),
router = express.Router();

//Show all posts => GET '/posts'
router.get('/', function(req, res){
  // res.send(posts.all);
  res.send("INDEX");
});

// Render a new post form -. GET '/posts/new'
router.get('/new', function(req, res){
  res.send("NEW");
});

//Show a specific post => GET '/psots/:id'
router.get('/:id', function(req, res){
  res.send("SHOW");
});

//Create a new post -> POST '/posts'
router.post('/', function(req, res){
  res.send("CREATE");
});

//Render the edit post form -> get '/posts/:id/edit
router.get('/:id/edit', function(req, res){
  res.send("EDIT");
});

// Update an existing post -> PATCH / PUT '/posts/:id'
router.put('/:id', function(req, res){
  res.send("UPDATE");
});

//delete a post -> DELETE '/posts/:id'
router.delete('/:id', function(req, res){
  res.send("DELETE");
});

module.exports = router;

