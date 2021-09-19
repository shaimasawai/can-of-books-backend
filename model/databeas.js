"use strict";
const mongoose = require("mongoose");
const bookschema = require("./Book model");

const UserData = new mongoose.Schema({
  emaill: String,
  Books: [bookschema],
});

const UserModle = mongoose.model("user", UserData);
let KinedBook = () => {
  let bookscontent = [
    {
      title: "harry potter",
      description:
        "This article is about the series of novels. For other uses, including related topics and derivative works, see Harry Potter (disambiguation). For the character in the series, see Harry Potter (character). For the film adaptations, see Harry Potter (film series).",
      status: "available",
    },
    {
      title: "Romeo and Juliet",
      description:
        "is a tragedy written by William Shakespeare early in his career about two young Italian star-crossed lovers whose deaths ultimately reconcile their feuding families. It was among Shakespeare's most popular plays during his lifetime and, along with Hamlet, is one of his most frequently performed plays. Today, the title characters are regarded as archetypal young lovers. ",
      status: "available",
    },
    {
      title: "sherlock holmes ",
      description:
        " is a fictional detective created by British author Sir Arthur Conan Doyle. Referring to himself as a consulting detective in the stories, Holmes is known for his proficiency with observation, deduction, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.",
      status: "available",
    },
  ];
  let newuser = new UserModle({
    emaill: "shaima.alsawaie@gmail.com",
    Books: bookscontent,
  });
  newuser.save();
};
module.exports = { UserModle, KinedBook };
