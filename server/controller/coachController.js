const coachService = require("../service/coachService.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  async getcoach(req, res) {
    try {
      var coach = await coachService.getAllCoach();
      res.send(coach);
    } catch {
      res.send("get error ");
    }
  },
  async getcoachById(req, res) {
    try {
      var coach = await coachService.getCoachById(req.params.id);
      res.send(coach);
    } catch {
      res.send("get error ");
    }
  },
  async deleteByParams(req, res) {
    try {
      var coach = await coachService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch {
      res.send("error deleting_params");
    }
  },
  async updated(req, res) {
    try {
      var coach = await coachService.update(req.params.id, req.body);
      res.send({ msg: "updated" });
    } catch {
      res.send("error updated");
    }
  },
  async updatedPassword(req, res) {
    try {
      var coach = await coachService.updatePassword(
        req.params.id,
        req.body.password
      );
      res.send({ msg: "updated" });
    } catch {
      res.send("error updated");
    }
  },
  async signUpcoach(req, res) {
    try {
      // res.send(req.body);
      if (!req.body.password || !req.body.email) {
        res.send({ msg: false });
      }
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        var coach = req.body;
        coach.password = hash;
        var a = await coachService.signup(coach);
        res.send({ msg: true });
      });
    } catch {
      res.send("get error ");
    }
  },
  async login(req, res) {
    try {
      var coach = await coachService.getCoachByEmail(req.body.email);
      if (coach) {
        bcrypt.compare(req.body.password, coach.password, (err, result) => {
          if (result) {
            var token = jwt.sign({ id: coach._id }, "sa7fa leblebi");
            res.send({ token: token });
          } else {
            res.status(401).json({ msg: "wrong password" });
          }
        });
      } else {
        res.status(401).json({ msg: "wrong email" });
      }
    } catch {
      res.send("get error ");
    }
  },
  async verify(req, res) {
    try {
      if (!req.body.token) {
        res.send({ msg: false });
      }
      var objId = jwt.verify(req.body.token, "sa7fa leblebi");
      var coach = await coachService.getCoachById(objId.id);
      if (coach) {
        res.send(coach);
      } else {
        res.send({ msg: false });
      }
    } catch {
      res.send("get error ");
    }
  },
};
