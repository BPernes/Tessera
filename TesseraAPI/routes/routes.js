const express = require('express');
const router = express.Router();

const service = require('../Controller/registerController.js')

router.post('/register', service.create);

router.get('/registers/details', service.details);

module.exports = router;