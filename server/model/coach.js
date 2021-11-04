const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const CoachSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    email: String,
    sammery: String,
    phonenumber: String,
    address: String,
    city: String,
    photo: String,
    field: String,
    type: { type: String, default: "Coach" },
  },
  {
    timestamps: true,
  }
);

const Coach = mongoose.model("Coach", CoachSchema);

module.exports = Coach;
