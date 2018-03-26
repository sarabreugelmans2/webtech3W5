var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/live', (req, res,next) => {
  res.render('live', {title:'live'});
})

router.get('/createpoll', (req, res,next) => {
  res.render('createpoll', {title:'createpoll'});
})

module.exports = router;
