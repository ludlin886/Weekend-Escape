const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const detailSchema = new Schema({
//   item: { type: String },
//   description: { type: String },
//   price: { type: Number, min: 0 },
// });

const reviewSchema = new Schema({
  review: { content: String },
  star: { type: Number, min: 1, max: 5 },
});

const barSchema = new Schema({
  image: { type: String },
  name: { type: String },
  address: { type: String },
  review: [reviewSchema],
  dineIn: { type: Boolean }, //Boolean => either true or false, 1 or 0, yes or no
  cocktail: { type: Boolean },
  happyhour: { type: Boolean },
  uploadDate: { type: Date },
  // detail: [detailSchema],
});

module.exports = mongoose.model("barList", barSchema);
// module.exports = mongoose.model("detail", detailSchema);
