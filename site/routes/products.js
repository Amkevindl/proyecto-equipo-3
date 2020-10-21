var express = require('express');
const { list } = require('../controllers/productsController');
var router = express.Router();

const productsController = require('../controllers/productsController')

router.get(':id/edit',productsController.edit)
router.get('/:id',productsController.show)



module.exports = router;