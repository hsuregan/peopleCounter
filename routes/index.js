var express = require('express');
var router = express.Router();

var counter = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  //graph.push(counter);
  res.render('index', { counter: counter });
});

router.post('/', function(req, res, next) {
	res.json(counter);
})

router.get('/increment', function(req, res, next) {
	counter += 1;
	res.json(counter);
})

router.get('/decrement', function(req, res, next) {
	counter -= 1;
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