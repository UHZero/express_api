const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'test') {
    const { getMongoUri } = require('./utils/getMongoUri');
    const mongoURI = getMongoUri();
    mongoose.connect(mongoURI);
}
