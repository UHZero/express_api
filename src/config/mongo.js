const mongoose = require('mongoose');
const { getMongoUri } = require('./utils/getMongoUri');

const mongoURI = getMongoUri();
mongoose.connect(mongoURI);
