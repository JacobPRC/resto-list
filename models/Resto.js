const mongoose = require("mongoose");

const RestoSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add name"],
  },
  city: String,
  tags: [String], // Maybe define tags? ie cheap, italian, asian, chinese, etc
  notes: String,
  rating: Number,
});

module.exports = mongoose.model("Resto", RestoSchema);
