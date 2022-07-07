const barList = require("../models/barList");

module.exports = {
  index,
  create,
  new: newBar,
};

//barlist is not defined
function index(req, res) {
  barList.find({}, function (err, bars) {
    res.render("barList/index", { title: "Bar", bars });
  });
}

function newBar(req, res) {
  res.render("/barList/index", { title: "Add Bar" });
}

function create(req, res) {
  const bars = new barList(req.body);
  bars.save(function (err) {
    if (err) return res.redirect("/barList");
    console.log(bars);
    res.redirect(`/barList/new/${bar._id}`);
  });
}

// function show(req, res) {
//   barList.findById(req.params.id).exec(function (err, bars) {
//     review.find(function (err, review) {
//       console.log(review);
//     });
//     res.render("barList/index", { title: "Bar Detail", bars, review });
//   });
// }
