const express = require('express');
const DrinkController = require('../controllers/DrinkController');

const router = express.Router();

router.get('/drinks', DrinkController.get);

router.get('/drink/:name', DrinkController.filter);

router.post('/drink', DrinkController.post);

router.put('/drink/:name', DrinkController.put);

router.patch('/drink/:name', DrinkController.patch);

router.delete('/drink/:name', DrinkController.delete);

module.exports = router;
