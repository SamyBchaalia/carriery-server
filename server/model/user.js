const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    phonenumber: String,
    address: String,
    postcode: String,
    city: String,
    photo: {
      type: String,
      default:
        "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png",
    },
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
