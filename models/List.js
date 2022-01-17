const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add list name"],
    unique: true,
  },
  entries: [mongoose.SchemaTypes.ObjectId], //This seems weird, may have to change. I thought it was schema.objectId
  isWant: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("List", ListSchema);
