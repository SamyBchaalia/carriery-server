var Pack = require("../Model/pack.js");

module.exports = new (class PackService {
  create(data) {
    return Pack.create(data);
  }
  getPackById(id) {
    return Pack.findOne({ _id: id });
  }
  getAllPack() {
    return Pack.find();
  }
  delete(id) {
    return Pack.findOneAndDelete({ _id: id });
  }
  update(_id, data) {
    return Pack.findOneAndUpdate({ _id: _id }, data);
  }

})();
