var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',);
});

/* GET login. */
router.get('/login', function(req, res, next) {
  res.render('login',);
});

/* GET register */
router.get('/register', function(req, res, next) {
  res.render('register',);
});

/* GET productcart */
router.get('/productcart', function(req, res, next) {
  res.render('productcart',);
});

module.exports = router;
