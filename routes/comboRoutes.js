const express = require("express");
const router = express.Router();
const comboController = require("../controllers/comboController.js");

router.get("/", comboController.getAllCombos);
router.get("/:id", comboController.getComboById);
router.post("/", comboController.createCombo);
router.delete("/:id", comboController.deleteCombo);

module.exports = router;
