var express = require('express');
var router = express.Router();
var LedCtrl = require('../controllers/raspberry');

router.post('/', LedCtrl.turnOnOffLed);

module.exports = router;
