const { Schema, model } = require("mongoose");

const MovieSchema = new Schema({
  title: String,
  director: String,
  stars: [{ type: String, trim: true }],
  image: String,
  description: String,
  showtimes: [{ type: String, trim: true }],
});

const MovieModel = model("Movie", MovieSchema);

module.exports = MovieModel;
