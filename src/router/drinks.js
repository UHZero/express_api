const express = require('express');
const DrinkController = require('../controllers/DrinkController');

const router = express.Router();

router.get('/drinks', DrinkController.get);

router.get('/drink/:id', DrinkController.filter);

router.post('/drink', DrinkController.post);

router.put('/drink/:id', DrinkController.put);

router.patch('/drink/:id', DrinkController.patch);

router.delete('/drink/:id', DrinkController.delete);

module.exports = router;
