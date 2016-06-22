var express = require("express"),
router = express.Router();

//Create a new post -> POST '/posts'
router.get('/', function(req, res){
  res.send("INDEX");
});

router.post('/', function(req, res){
  res.send(req.body);
});

module.exports = router;

