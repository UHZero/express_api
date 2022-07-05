const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI || "mongouri";

mongoose.connect(mongoUri);
