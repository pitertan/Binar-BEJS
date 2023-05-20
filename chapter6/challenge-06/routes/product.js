const express = require('express');
const router = express.Router();
const product = require('../controller/product.js')

router.get('/', product.show)
router.post('/', product.create)
router.get('/:id', product.showOne)
router.put('/:id', product.update)
router.delete('/:id', product.destroy)

module.exports = router