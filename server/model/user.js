const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    email: String,
    phonenumber: String,
    address: String,
    postcode: String,
    city: String,
    photo: String,
    education: String,
    country: String,
    about: String,
    field: String,
    type: { type: String, default: "User" },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
