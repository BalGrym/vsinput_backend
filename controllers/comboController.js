// let combos = require("../mock-combos.js");
const Combo = require("../models/combo.js");

exports.getAllCombos = (req, res) => {
  Combo.find()
    .then((combos) => res.status(200).json(combos))
    .catch((error) => res.status(400).json({ error }));
};

// exports.getComboById = (req, res) => {
//   const id = parseInt(req.params.id);
//   const combo = combos.find((combo) => combo.id === id);
//   res.json(combo);
// };

exports.createCombo = (req, res) => {
  const combo = new Combo({
    inputs: req.body.inputs,
  });
  combo
    .save()
    .then(() => res.status(201).json({ message: `Combo Créé` }))
    .catch((error) => res.status(400).json({ error }));
};
