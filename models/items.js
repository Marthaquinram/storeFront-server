'use strict';

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String,
  image: String,
});

// use schema to craft a book model
const itemModel = mongoose.model('itemSchema', itemSchema);

module.exports = itemModel;
