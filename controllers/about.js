// const about = require("../models/about");

module.exports = {
  index,
};

function index(req, res) {
  res.render("about/index");
}
