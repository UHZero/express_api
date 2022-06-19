const mongoose = require('mongoose');

module.exports = mongoose.model('Drink', {
  name: String, price: Number, available: Boolean,
});
