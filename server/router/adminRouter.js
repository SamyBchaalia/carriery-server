const router = require("express").Router();
const adminController = require("../controller/adminController.js");

router.post("/signup", adminController.signUpadmin);
router.post("/signin", adminController.login);
router.post("/verify", adminController.verify);
router.get("/", adminController.getadmin);
router.delete("/:id", adminController.deleteByParams);
router.put("/password/:id", adminController.updatedPassword);

module.exports = router;
