const express = require('express');
const drinksRouter = require('./router/drinks');
const testRouter = require('./router/testRoute');
require('./config/mongo');

const client = express();

client.use(express.json());
client.use(drinksRouter);
client.use(testRouter);

module.exports = client;
