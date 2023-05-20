var express = require('express');
var router = express.Router();
const product = require('../controller/product.js');
const component = require('../controller/component.js');
const supplier = require('../controller/supplier.js');

router.get('/api/product', product.show)
router.post('/api/product', product.create)
router.get('/api/product/:id', product.showOne)
router.put('/api/product/:id', product.update)
router.delete('/api/product/:id', product.destroy)

router.get('/api/component', component.show)
router.post('/api/component', component.create)
router.get('/api/component/:id', component.showOne)
router.put('/api/component/:id', component.update)
router.delete('/api/component/:id', component.destroy)

router.get('/api/supplier', supplier.show)
router.post('/api/supplier', supplier.create)
router.get('/api/supplier/:id', supplier.showOne)
router.put('/api/supplier/:id', supplier.update)
router.delete('/api/supplier/:id', supplier.destroy)


module.exports = router;
