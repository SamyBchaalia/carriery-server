var User = require("../Model/user.js");

module.exports = new (class userService {
  signup(data) {
    return User.create(data);
  }
  getUserById(id) {
    return User.findOne({ _id: id });
  }
  getUserByEmail(email) {
    return User.findOne({ email: email });
  }
  getAllUser() {
    return User.find();
  }
  delete(id) {
    return User.findOneAndDelete({ _id: id });
  }
  update(_id, data) {
    return User.findOneAndUpdate({ _id: _id }, data);
  }
  updatePassword(_id, newpassword) {
    return User.findOneAndUpdate({ _id: _id }, {password : newpassword});
  }
})();
