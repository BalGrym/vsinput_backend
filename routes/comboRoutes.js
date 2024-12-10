const express = require("express");
const router = express.Router();
const comboController = require("../controllers/comboController.js");

router.get("/:name", comboController.getCombosCharacter);
router.post("/:name", comboController.createCombo);
router.delete("/:name/:id", comboController.deleteCombo);

module.exports = router;
