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
  _id: {
    type: String,
    required: true,
  },
});

module.exports.betSchema = mongoose.model('betSchema', betSchema);
