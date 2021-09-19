"use strict";
const mongoose = require("mongoose");
const bookschema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
});

const bookModel = mongoose.model("Book", bookschema);
module.exports = bookschema;
