const Bar = require("../models/barList");

module.exports = {
  index,
  //   show,
  //   new: newBar,
  //   create,
};

function index(req, res) {
  //   Bar.find({}, function (err, bar) {
  res.render("barList/index");
  //   });x
}

// function show(req, res) {
//   Movie.findById(req.params.id)
//     .populate("cast")
//     .exec(function (err, movie) {
//       Performer.find({ _id: { $nin: movie.cast } }, function (err, performers) {
//         console.log(performers);
//         res.render("movies/show", { title: "Movie Detail", movie, performers });
//       });
//     });
// }

// function newBar(req, res) {
//   res.render("movies/new", { title: "Add Movie" });
// }

// function create(req, res) {
//   // convert nowShowing's checkbox of nothing or "on" to boolean
//   req.body.nowShowing = !!req.body.nowShowing;
//   for (let key in req.body) {
//     if (req.body[key] === "") delete req.body[key];
//   }
//   const movie = new Movie(req.body);
//   movie.save(function (err) {
//     if (err) return res.redirect("/movies/new");
//     console.log(movie);
//     res.redirect(`/movies/${movie._id}`);
//   });
// }
