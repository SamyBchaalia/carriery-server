var Coach = require("../model/coach.js");

module.exports = new (class CoachService {
  signup(data) {
    return Coach.create(data);
  }
  getCoachById(id) {
    return Coach.findOne({ _id: id });
  }
  getCoachByEmail(email) {
    return Coach.findOne({ email: email });
  }
  getAllCoach() {
    return Coach.find();
  }
  delete(id) {
    return Coach.findOneAndDelete({ _id: id });
  }
  update(_id, data) {
    return Coach.findOneAndUpdate({ _id: _id }, data);
  }
  updatePassword(_id, newpassword) {
    return Coach.findOneAndUpdate({ _id: _id }, { password: newpassword });
  }
})();
