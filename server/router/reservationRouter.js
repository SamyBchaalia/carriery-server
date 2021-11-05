const router = require("express").Router();
const reservationController = require("../controller/reservationController");

router.post("/create", reservationController.postreservation);
router.put("/confirmP/:id", reservationController.updatepayment);
router.put("/feedback/:id", reservationController.updatefeedback);
router.put("/status/:id", reservationController.updatestatus);
router.get("/", reservationController.get);
router.get("/archieve", reservationController.getarchive);
router.get("/coach/:coachId", reservationController.getreservationBycoachId);
router.get("/user/:userId", reservationController.getreservationByuserId);
router.get("/field/:field", reservationController.getreservationByfield);

module.exports = router;
