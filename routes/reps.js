var express = require('express');
var router = express.Router();

var reps = 0;

router.get('/', function(req, res, next) {
  //graph.push(counter);
  res.render('reps', {reps: reps});
});

router.post('/increment', function(req, res, next) {
	reps += 1;
	res.json(reps);
});

router.get('/count', function(req, res, next){
	res.json(reps);
});

module.exports = router;