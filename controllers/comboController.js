const Character = require("../models/character.js");

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
