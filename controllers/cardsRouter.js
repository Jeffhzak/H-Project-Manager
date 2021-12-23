const express = require("express");
const router = express.Router();
const cardsController = require("./cardsController");

router.put("/sync", cardsController.syncCards);

module.exports = router;