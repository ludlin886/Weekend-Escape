var express = require("express");
var router = express.Router();
const barCtrl = require("../controllers/barList");

// create a new bar
router.get("/index", barCtrl.new);

//  get bar page.
router.get("/", barCtrl.index);

router.get("/", barCtrl.create);

// router.post("/", barCtrl.create);
router.post("/new", barCtrl.create);

module.exports = router;
