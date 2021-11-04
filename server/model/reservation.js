const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const ReservationSchema = new mongoose.Schema(
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
    field: String,
    payment: String,
    comment: String,
    type: { type: String, default: "Reservation" },
  },
  {
    timestamps: true,
  }
);

const Reservation = mongoose.model("Reservation", ReservationSchema);

module.exports = Reservation;
