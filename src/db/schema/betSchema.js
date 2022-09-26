const mongoose = require('mongoose');

const betSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: false,
  },
});

module.exports.betSchema = mongoose.model('betSchema', betSchema);
