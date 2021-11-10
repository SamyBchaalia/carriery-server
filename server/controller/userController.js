const userService = require("../service/userService.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  async getUser(req, res) {
    try {
      var user = await userService.getAllUser();
      res.send(user);
    } catch {
      res.send("get error ");
    }
  },
  async getUserById(req, res) {
    try {
      var user = await userService.getUserById(req.params.id);
      res.send(user);
    } catch {
      res.send("get error ");
    }
  },
  async deleteByParams(req, res) {
    try {
      var user = await userService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch {
      res.send("error deleting_params");
    }
  },
  async updated(req, res) {
    try {
      var user = await userService.update(req.params.id, req.body);
      res.send({ msg: "updated" });
    } catch {
      res.send("error updated");
    }
  },
  async updatedPassword(req, res) {
    try {
      var user = await userService.updatePassword(
        req.params.id,
        req.body.password
      );
      res.send({ msg: "updated" });
    } catch {
      res.send("error updated");
    }
  },
  async signUpUser(req, res) {
    try {
      // res.send(req.body);
      if (!req.body.password || !req.body.email) {
        res.status(401).json({ msg: false }) 
      } 
      var user = await userService.getUserByEmail(req.body.email);
      if(user){
        res.status(401).json({ msg : "email already exist"}) 
      }
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        var user = req.body;
        user.password = hash;
        var a = await userService.signup(user);
      var u = await userService.getUserByEmail(req.body.email);
 
        var token = jwt.sign({ id: u._id }, "sa7fa leblebi");
        res.send({ token: token });
      });
    } catch {
      res.send("get error ");
    }
  },
  async login(req, res) {
    try {
      var user = await userService.getUserByEmail(req.body.email);
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (result) {
            var token = jwt.sign({ id: user._id }, "sa7fa leblebi");
            res.send({ token: token });
          } else {
            res.send({ msg: false });
          }
        });
      } else {
        res.send({ msg: false });
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
      var user = await userService.getUserById(objId.id);
      if (user) {
        res.send(user);
      } else {
        res.send({ msg: false });
      }
    } catch {
      res.send("get error ");
    }
  },
};
