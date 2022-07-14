const express = require('express');
const TestController = require('../controllers/testController');

const router = express.Router();

router.get('/test', TestController.get);

module.exports = router;
