const router = require("express").Router();
const coachController = require("../controller/coachController.js");

router.post("/signup", coachController.signUpcoach);
router.post("/signin", coachController.login);
router.post("/verify", coachController.verify);
router.get("/:id", coachController.getcoachById);
router.get("/", coachController.getcoach);
router.put("/:id", coachController.updated);
router.delete("/:id", coachController.deleteByParams);
router.put("/password/:id", coachController.updatedPassword);

module.exports = router;
