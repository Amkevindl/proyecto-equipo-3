var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController')

router.get('/edit',productsController.edit)
router.get('/create',productsController.create)
router.get('/:id',productsController.show)


module.exports = router;