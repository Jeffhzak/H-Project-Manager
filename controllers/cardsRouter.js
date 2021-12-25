const express = require("express");
const router = express.Router();
const cardsController = require("./cardsController");

//! SEED/SYNC
router.put("/sync", cardsController.syncCards);

//! READ
router.get("/:boardID", cardsController.getCardsOnBoard);

//! CREATE
router.post("/new", cardsController.createNewCard);

//! UPDATE
router.put("/:id", cardsController.editCard);

module.exports = router;