const { Schema, model } = require("mongoose")
const mongoose = require("mongoose")

const BookSchema = new Schema(
  {
    _id: String,
    title: String,
    author: String,
    description: String,
    year: Number,
    genre: Array,
    price: Number,
  },
  { _id: false } // Comunica a mongoDB di non creare l'id, che verrà creato da node,js
)

module.exports = model("Book", BookSchema)
