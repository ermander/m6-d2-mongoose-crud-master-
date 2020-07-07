const { Schema, model } = require("mongoose")
const mongoose = require("mongoose")

// Definizione dello schema del DB
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  age: {
    type: Number,
    min: [18, "You are toooooo young!"],
    max: 65,
    default: 18,
  },
  professions: Array,
})

module.exports = model("User", UserSchema)
