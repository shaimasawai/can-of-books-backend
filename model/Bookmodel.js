"use strict";
const mongoose = require("mongoose");
const bookschema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  email: String,
});

const bookModel = mongoose.model("Book", bookschema);
module.exports = bookModel;
