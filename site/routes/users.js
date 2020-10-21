var express = require('express');
var router = express.Router();

/* GET users login. */
router.get('/login', function(req, res, next) {
  res.render('users/login');
});

/* GET users registry. */
router.get('/register', function(req, res, next) {
  res.render('users/register');
});

module.exports = router;
