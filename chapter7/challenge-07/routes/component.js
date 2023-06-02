const express = require('express');
const router = express.Router();
const component = require('../controller/component.js')

router.get('/', component.show)
router.post('/', component.create)
router.get('/:id', component.showOne)
router.put('/:id', component.update)
router.delete('/:id', component.destroy)

module.exports = router