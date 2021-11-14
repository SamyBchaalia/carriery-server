const reservationService = require("../service/reservationServices.js");
const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "carrierytn@gmail.com",
    pass: "20028952sami",
  },
  tls: {
    rejectUnauthorized: false,
  },
});
module.exports = {
  async postreservation(req, res) {
    try {
      var reservation = await reservationService.addToReservation(req.body);
      res.send({ msg: "inserted" });
    } catch {
      res.send("error inserting");
    }
  },

  async updatepayment(req, res) {
    try {
      var car = await reservationService.updatePayment(
        req.params.id,
        req.body.payment
      );
      res.send({ msg: "updated" });
    } catch {
      res.send("error updated");
    }
  },

  async updateCoachId(req, res) {
    try {
      var car = await reservationService.updatecoachId(
        req.params.id,
        req.body.coachId
      );
      res.send({ msg: "updated" });
    } catch {
      res.send("error updated");
    }
  },
  async updatefeedback(req, res) {
    try {
      var data = await reservationService.getReservationById(req.params.id);
      var car = await reservationService.updatefeedback(
        req.params.id,
        req.body.feedback
      );
      let mailOptions = {
        from: "carrierytn@gmail.com",
        to: data[0].userId._id,
        subject: "your feedback is ready",
        text: "go check it now",
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.send({ msg: "updated" });
    } catch {
      res.send("error updated");
    }
  },
  async updatestatus(req, res) {
    try {
      var car = await reservationService.updatestatus(
        req.params.id,
        req.body.status
      );
      res.send({ msg: "updated" });
    } catch {
      res.send("error updated");
    }
  },
  async getreservationByfield(req, res) {
    try {
      console.log("here");
      var reservation = await reservationService
        .getReservationByfield(req.params.field)
        .populate("userId packId coachId");
      res.send(reservation);
    } catch {
      res.send("get error ");
    }
  },

  async getreservationByuserId(req, res) {
    try {
      console.log("here");
      var reservation = await reservationService
        .getReservationByuserId(req.params.userId)
        .populate("userId packId coachId");
      res.send(reservation);
    } catch {
      res.send("get error ");
    }
  },
  async getreservationBycoachId(req, res) {
    try {
      console.log("here");
      var reservation = await reservationService
        .getReservationBycoachId(req.params.coachId)
        .populate("userId packId coachId");
      res.send(reservation);
    } catch {
      res.send("get error ");
    }
  },
  async getreservationByuserId(req, res) {
    try {
      console.log("here");
      var reservation = await reservationService
        .getReservationByuserId(req.params.userId)
        .populate("userId packId coachId");
      res.send(reservation);
    } catch {
      res.send("get error ");
    }
  },
  async get(req, res) {
    try {
      var reservation = await reservationService
        .getall()
        .populate("userId packId coachId");
      res.send(reservation);
    } catch {
      res.send("get error ");
    }
  },
  async getarchive(req, res) {
    try {
      var reservation = await reservationService
        .getallArchieve()
        .populate("userId packId coachId");
      res.send(reservation);
    } catch {
      res.send("get error ");
    }
  },
  async archiveReservation(req, res) {
    try {
      var data = await reservationService.getReservationById(req.params.id);
      var arr = await reservationService.archieve(req.params.id);
      var user = await reservationService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch {
      res.send("error deleting_params");
    }
  },
};
