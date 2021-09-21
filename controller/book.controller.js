"use strict";
const { req, res } = require("express");
const bookModel = require("../model/Bookmodel");

// Retrieve
const SearchBook = (req, res) => {
  // Query parameters
  bookModel.find().then((data) => {
    res.status(200).json(data);
  });
};

const CreatBook = (req, res) => {
  // Body
  // this will be a json object that contains username and email
  let BookData = req.body;
  let newBook = new bookModel(BookData);
  newBook.save();
  bookModel.find({}).then((data) => {
    res.status(200).json(data);
  });
};
const DeletBook = (req, res) => {
  // PARAMS
  let BookID = req.params.id;
  bookModel.findByIdAndDelete(BookID).then(() => {
    bookModel.find().then((data) => res.json(data));
  });
};

const updateBook = async (req, res) => {
  let BookID = req.params.id;
  let updatedData = req.body;
  bookModel.findOne({ _id: BookID }).then((book) => {
    book.title = updatedData.title;
    book.description = updatedData.description;
    book.status = updatedData.status;
    book.email = updatedData.email;
    book.save();
  });
  let updateBookList = await bookModel.find({});
  res.status(200).send(updateBookList);
};

module.exports = {
  SearchBook,
  CreatBook,
  DeletBook,
  updateBook,
};
