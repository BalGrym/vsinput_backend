// let combos = require("../mock-combos.js");
const Combo = require("../models/combo.js");
const Character = require("../models/character.js");

// exports.getAllCombos = (req, res) => {
//   Combo.find()
//     .then((combos) => res.status(200).json(combos))
//     .catch((error) => res.status(500).json({ error }));
// };

// exports.getComboById = (req, res) => {
//   Combo.findOne({ _id: req.params.id })
//     .then((combo) => res.status(200).json(combo))
//     .catch((error) => res.status(400).json(error));
// };

// exports.createCombo = (req, res) => {
//   const combo = new Combo({
//     inputs: req.body.inputs,
//   });
//   combo
//     .save()
//     .then(() => res.status(201).json({ message: `Combo Créé` }))
//     .catch((error) => res.status(400).json({ error }));
// };

// exports.deleteCombo = (req, res) => {
//   Combo.deleteOne({ _id: req.params.id })
//     .then(() => res.status(200).json({ message: "Combo supprimé" }))
//     .catch((error) => res.status(500).json({ error }));
// };

// combo character

exports.getAllCombos = (req, res) => {
  Combo.find()
    .then((combos) => res.status(200).json(combos))
    .catch((error) => res.status(500).json({ error }));
};

exports.getCombosCharacter = (req, res) => {
  const characterName = req.params.name;
  Character.findOne({ name: characterName })
    .then((combo) => {
      console.log(combo);
      res.status(200).json(combo);
    })
    .catch((error) => res.status(400).json(error));
};

exports.createCombo = (req, res) => {
  const characterName = req.params.name;
  const { inputs, description } = req.body;

  if (!inputs || inputs.length === 0) {
    return res.status(400).json({
      message: "Les 'inputs' sont requis et doivent être un tableau non vide.",
    });
  }

  Character.findOne({ name: characterName })
    .then((character) => {
      if (!character) {
        return res
          .status(404)
          .json({ message: "Le personnage n'a pas été trouvé." });
      }

      const newCombo = {
        inputs,
        description: description || "",
      };
      character.combos.push(newCombo);

      return character.save();
    })
    .then(() => {
      return res.status(201).json({ message: "Combo Créé avec succès !" });
    })
    .catch((error) => res.status(500).json(error));
};

exports.deleteCombo = (req, res) => {
  const characterName = req.params.name;
  const comboId = req.params.id;
  Character.findOne({ name: characterName })
    .then((character) => {
      const comboIndex = character.combos.findIndex(
        (combo) => combo._id.toString() === comboId
      );
      character.combos.splice(comboIndex, 1);

      return character.save();
    })
    .then(() => res.status(200).json({ message: "Combo supprimé" }))
    .catch((error) => res.status(500).json({ error }));
};
