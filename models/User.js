const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  // This wil obviously be changed
  password: {
    type: String,
    required: true,
  },
  lists: [mongoose.SchemaTypes.ObjectId],
});

module.exports = mongoose.model("User", UserSchema);
