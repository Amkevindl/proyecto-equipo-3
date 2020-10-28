var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController')

router.get('/edit',productsController.edit)
router.get('/new',productsController.new)
router.get('/:id',productsController.show)
module.exports = router;