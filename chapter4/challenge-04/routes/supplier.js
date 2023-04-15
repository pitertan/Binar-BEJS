const express = require('express');
const router = express.Router();
const supplier = require ('../controller/supplier.js')

router.get('/', supplier.show)
router.post('/', supplier.create)
router.get('/:id', supplier.showOne)
router.put('/:id', supplier.update)
router.delete('/:id', supplier.destroy)

module.exports = router
