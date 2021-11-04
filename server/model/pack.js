const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const PackSchema = new mongoose.Schema(
  {
    title: Number,
    service: String,
    price: String,
    type: { type: String, default: "Pack" },
  },
  {
    timestamps: true,
  }
);

const Pack = mongoose.model("Pack", PackSchema);

module.exports = Pack;
