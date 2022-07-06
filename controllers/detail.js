const Bar = require("../models/barList");

module.exports = {
  index,
};

function index(req, res) {
  res.render("detail/index");
}
