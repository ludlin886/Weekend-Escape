var express = require("express");
var router = express.Router();
const aboutCtrl = require("../controllers/about");

//  get about page.
router.get("/", aboutCtrl.index);

module.exports = router;
