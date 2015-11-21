var express = require('express');
var router = express.Router();

var counter = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  var count = counter;
  res.render('index', { counter: count });
});

router.post('/increment', function(req, res, next) {
	counter += 1;
	console.log(counter);
	res.json(counter);
})

router.post('/decrement', function(req, res, next) {
	counter -= 1;
	console.log(counter);
	res.json(counter);
})

module.exports = router;
