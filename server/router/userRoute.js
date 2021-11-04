const router = require("express").Router();
const userController = require("../controller/userController.js");

router.post("/signup", userController.signUpUser);
router.post("/signin", userController.login);
router.post("/verify", userController.verify);
router.get("/:id", userController.getUserById);
router.get("/", userController.getUser);
router.put("/:id", userController.updated);
router.delete("/:id", userController.deleteByParams);
router.put("/password/:id", userController.updatedPassword);

module.exports = router;
