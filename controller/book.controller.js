"use strict";
const { req, res } = require("express");
const { model } = require("mongoose");
const { UserModle, KinedBook } = require("../model/databeas");
KinedBook();
let jsonData = (req, res) => {
  UserModle.find().then((data) => {
    res.json(data);
  });
};
module.exports = jsonData;
