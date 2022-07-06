const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
  item: { type: String },
  description: { type: String },
  price: { type: Number, min: 0 },
});

module.exports = mongoose.model("about", aboutSchema);
