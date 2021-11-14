var Reservation = require("../model/reservation.js");
var Archieve = require("../model/archieve.js");

module.exports = new (class ReservationService {
  //post
  addToReservation(data) {
    return Reservation.create(data);
  }
  archieve(data) {
    return Archieve.create(data);
  }
  delete(id) {
    return Reservation.findOneAndDelete({ _id: id });
  }
  updatePayment(_id, payment) {
    return Reservation.findOneAndUpdate({ _id: _id }, { payment: payment });
  }
  updatefeedback(_id, feedback) {
    return Reservation.findOneAndUpdate({ _id: _id }, { feedback: feedback });
  }
  updatecoachId(_id, coachId) {
    return Reservation.findOneAndUpdate({ _id: _id }, { coachId: coachId });
  }
  updatestatus(_id, status) {
    return Reservation.findOneAndUpdate({ _id: _id }, { status: status });
  }
  getall() {
    return Reservation.find();
  }
  getallArchieve() {
    return Archieve.find();
  }
  getReservationByfield(field) {
    return Reservation.find({ field: field });
  }
  getReservationByuserId(userId) {
    return Reservation.find({ userId: userId });
  }
  getReservationBycoachId(coachId) {
    return Reservation.find({ coachId: coachId, status: "3" });
  }
  getReservationBycoachIdandDone(coachId) {
    return Reservation.find({ coachId: coachId, status: "4" });
  }
  getvarified() {
    return Reservation.find({ status: "2" });
  }
  getReservationBypackId(packId) {
    return Reservation.find({ packId: packId });
  }
  getReservationById(_id) {
    return Reservation.find({ _id: _id });
  }
  update(_id, data) {
    return Reservation.findOneAndUpdate({ _id: _id }, data);
  }
})();
