var Reservation = require("../model/reservation");

module.exports = new (class ReservationService {
  //post
  addToReservation(data) {
    return Reservation.create(data);
  }
  updatePayment(_id, payment) {
    return Reservation.findOneAndUpdate({ _id: _id }, { payment: payment });
  }
  updatefeedback(_id, feedback) {
    return Reservation.findOneAndUpdate({ _id: _id }, { feedback: feedback });
  }
  updatestatus(_id, status) {
    return Reservation.findOneAndUpdate({ _id: _id }, { status: status });
  }
  getall() {
    return Reservation.find();
  }
  getReservationByfield(field) {
    return Reservation.find({ field: field });
  }
  getReservationByuserId(userId) {
    return Reservation.find({ userId: userId });
  }
  getReservationBycoachId(coachId) {
    return Reservation.find({ coachId: coachId });
  }
  getReservationBypackId(packId) {
    return Reservation.find({ packId: packId });
  }
  update(_id, data) {
    return Reservation.findOneAndUpdate({ _id: _id }, data);
  }
})();
