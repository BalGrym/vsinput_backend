// let combos = require("../mock-combos.js");
const Combo = require("../models/combo.js");

exports.getAllCombos = (req, res) => {
  Combo.find()
    .then((combos) => res.status(200).json(combos))
    .catch((error) => res.status(400).json({ error }));
};

exports.getComboById = (req, res) => {
  Combo.findOne({ _id: req.params.id })
    .then((combo) => res.status(200).json(combo))
    .catch((error) => res.status(400).json(error));
};

exports.createCombo = (req, res) => {
  const combo = new Combo({
    inputs: req.body.inputs,
  });
  combo
    .save()
    .then(() => res.status(201).json({ message: `Combo Créé` }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteCombo = (req, res) => {
  Combo.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Combo supprimé" }))
    .catch((error) => res.status(500).json({ error }));
};
