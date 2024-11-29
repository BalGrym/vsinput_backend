const mongoose = require("mongoose");
const Character = require("../models/character");

const characters = [
  { name: "aki" },
  { name: "akuma" },
  { name: "blanka" },
  { name: "cammy" },
  { name: "chunLi" },
  { name: "deejay" },
  { name: "dhalsim" },
  { name: "ed" },
  { name: "ehonda" },
  { name: "guile" },
  { name: "jamie" },
  { name: "jp" },
  { name: "juri" },
  { name: "ken" },
  { name: "kimberly" },
  { name: "luke" },
  { name: "lily" },
  { name: "manon" },
  { name: "marisa" },
  { name: "mbison" },
  { name: "rashid" },
  { name: "ryu" },
  { name: "terry" },
  { name: "zangief" },
];

async function initializeCharacters() {
  try {
    for (const char of characters) {
      const exists = await Character.findOne({ name: char.name });
      if (!exists) {
        await Character.create(char);
        console.log(`Personnage ajouté : ${char.name}`);
      }
    }
    console.log("Initialisation des personnages terminée !");
  } catch (err) {
    console.error("Erreur lors de l'initialisation des personnages :", err);
  }
}

module.exports = initializeCharacters;
