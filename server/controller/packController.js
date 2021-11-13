const packService = require("../service/packService.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  async getpack(req, res) {
    try {
      var pack = await packService.getAllPack();
      res.send(pack);
    } catch {
      res.send("get error ");
    }
  },
  async getpackById(req, res) {
    try {
      var pack = await packService.getpackById(req.params.id);
      res.send(pack);
    } catch {
      res.send("get error ");
    }
  },
  async deleteByParams(req, res) {
    try {
      var pack = await packService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch {
      res.send("error deleting_params");
    }
  },
  async updated(req, res) {
    try {
      var pack = await packService.update(req.params.id, req.body);
      res.send({ msg: "updated" });
    } catch {
      res.send("error updated");
    }
  },
  async create(req, res, next) {
    try {
      var pack = await packService.createe(req.body);
      res.send({ msg: "inserted" });
    } catch (next) {
      console.log(next);
      res.send("error inserting");
    }
  },
};
