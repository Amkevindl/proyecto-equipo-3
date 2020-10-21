var express = require('express');
const { list } = require('../controllers/categoriesController');
var router = express.Router();

const categoriesController = require('../controllers/categoriesController')

router.get('/',categoriesController.list)
router.get('/:id',categoriesController.show)


module.exports = router;