const reservationService = require("../service/reservationServices.js");
const nodemailer = require("nodemailer");
const axios = require("axios");

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
      var car = await reservationService.updatefeedback(
        req.params.id,
        req.body.feedback
      );
      let mailOptions = {
        from: "carrierytn@gmail.com",
        to: req.body.email,
        subject: "your feedback is ready",
        text: "go check it now",
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          res.send({ msg: "updated" });
        }
      });
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
  async verifyPayment(req, res) {
    try {
      var car = await reservationService.updatestatus(req.params.id, "2");
      var p = await reservationService.updatePayment(
        req.params.id,
        "PAYED BY KONNEKT"
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
  async getreservationBycoachIdandDone(req, res) {
    try {
      console.log("here");
      var reservation = await reservationService
        .getReservationBycoachIdandDone(req.params.coachId)
        .populate("userId packId coachId");
      res.send(reservation);
    } catch {
      res.send("get error ");
    }
  },
  async gitverifiedRequests(req, res) {
    try {
      var reservation = await reservationService
        .getvarified()
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
  async paiment(req, res) {
    var s =
      "https://carriery-server.herokuapp.com/reservation/verifypayment/" +
      req.params.id;
    var obj = {
      receiverWalletId: "619187c6073209498e64172f",
      amount: 1000,
      token: "TND",
      firstName: "Mon prenom",
      lastName: "Mon nom",
      phoneNumber: "24563609",
      email: "mon.email@mail.com",
      orderId: "1234657",
      link: "https://api.dev.konnect.network/WSlQUtBF8",
      webhook: s,
      successUrl: s,
      failUrl: "https://dev.konnect.network/gateway/payment-failure",
      acceptedPaymentMethods: ["bank_card", "wallet", "e-DINAR"],
    };
    let config = {
      headers: {
        "x-api-key": "619187c6073209498e64172e:xB1mo2ZMSWWuoKT-9P3_USbzfZl7",
      },
    };
    axios
      .post(
        "https://api.preprod.konnect.network/api/v2/payments/init-payment",
        obj,
        config
      )
      .then((a) => {
        console.log("hahah", a.data);
        res.send(a.data);
      });
  },
};
