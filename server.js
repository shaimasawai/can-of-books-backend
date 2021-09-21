"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const {
  SearchBook,
  CreatBook,
  DeletBook,
  updateBook,
} = require("./controller/book.controller");
mongoose.connect(`${MONGO_DB_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// to be able to capture the post req body use the below line of code
app.use(express.json());
app.use(cors());
app.get("/Book-list", SearchBook);
app.post("/create-Book", CreatBook);
app.delete("/delete-Book/:id", DeletBook);
app.put("/update-Book/:id", updateBook);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
