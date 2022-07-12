const mongoose = require('mongoose');
const { getMongoUri } = require("../config/utils/getMongoUri")

const mongoUri = getMongoUri();

mongoose.connect(mongoUri);
