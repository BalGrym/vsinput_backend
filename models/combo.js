const mongoose = require("mongoose");

const comboSchema = new mongoose.Schema({
  inputs: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Combo", comboSchema);
