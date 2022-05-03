const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller')

router.get('/emails', controller.findAll);

router.post('/emails/new', controller.create);

router.get('/emails/:id', controller.findById);


module.exports = router;