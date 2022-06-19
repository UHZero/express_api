const express = require('express');
const drinksRouter = require('./router/drinks');
require('./config/mongo');

const client = express();

client.use(express.json());
client.use(drinksRouter);

module.exports = client;
