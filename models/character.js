const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  combos: [
    {
      inputs: {
        type: [String],
        required: false,
      },
      description: {
        type: String,
        required: false,
      },
    },
  ],
});

module.exports = mongoose.model("Character", characterSchema);
