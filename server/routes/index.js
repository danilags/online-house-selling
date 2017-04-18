var express = require('express');
var router = express.Router();
var house = require('../controllers/house');

router.get('/', house.getAll)

router.post('/', house.createHouse)

router.put('/:id', house.updateHouse)

router.delete('/:id', house.deleteHouse)

module.exports = router;
