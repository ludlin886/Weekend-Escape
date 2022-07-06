var express = require("express");
var router = express.Router();
const barCtrl = require("../controllers/barList");
const detailCtrl = require("../controllers/detail");

//  get bar page.
router.get("/", barCtrl.index);
router.get("/detail", detailCtrl.index);

module.exports = router;
