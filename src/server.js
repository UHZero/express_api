const express = require('express');
const drinksRouter = require('./router/drinks');
const testsRouter = require("./router/testRoute")
// require('./config/mongo');

const client = express();

client.use(express.json());
client.use(drinksRouter);
client.use(testsRouter)

module.exports = client;
