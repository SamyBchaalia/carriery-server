const router = require("express").Router();
const packController = require("../controller/packController.js");

router.post("/create", packController.create);
router.get("/", packController.getpack);
router.get("/:id", packController.getpackById);
router.put("/:id", packController.updated);
router.delete("/:id", packController.deleteByParams);

module.exports = router;
