var express = require('express');
var router = express.Router();

var counter = 0;
var incremented = 0;
var decremented = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  //graph.push(counter);
  res.render('index', { counter: counter });
});

router.post('/', function(req, res, next) {
	res.json(counter);
})

router.get('/increment', function(req, res, next) {
	if(incremented == 0) {
		incremented = 1;
	} else if(decremented == 1) {
		counter--;
		decremented = 0;
	}
	res.json(counter);
})

router.get('/decrement', function(req, res, next) {
	if(incremented = 1) {
		counter++;
		incremented = 0;
	} else if(decremented == 0) {
		decremented = 1;
	}
	res.json(counter);
})

router.post('/reset', function(req, res, next) {
	counter = 0;
	incremented = 0;
	decremented = 0;
	res.json(counter);
})

router.post('/increment', function(req, res, next) {
	counter += 1;
	res.json(counter);
})

router.post('/decrement', function(req, res, next) {
	counter -= 1;
	res.json(counter);
})

router.get('/count', function(req, res, next){
	res.json(counter);
})

module.exports = router;
