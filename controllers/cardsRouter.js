const express = require("express");
const router = express.Router();
const cardsController = require("./cardsController");

//! SEED/SYNC
router.put("/sync", cardsController.syncCards);

//! GET
router.get("/:boardID", cardsController.getCardsOnBoard);

module.exports = router;