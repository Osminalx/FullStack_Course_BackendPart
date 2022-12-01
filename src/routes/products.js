const express = require('express');

const productsController = require('../Controller/products-controller');

const router = express.Router();

router.get('/', productsController.getProducts);

router.post('/', productsController.saveProduct);

module.exports = router;
