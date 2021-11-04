const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const ArchieveSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    packId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Pack",
    },
    coachId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    status: String,
    resume: String,
    payment: String,
    comment: String,
    type: { type: String, default: "Archieve" },
  },
  {
    timestamps: true,
  }
);

const Archieve = mongoose.model("Archieve", ArchieveSchema);

module.exports = Archieve;
