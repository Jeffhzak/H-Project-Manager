const mongoose = require("mongoose");

const cardsSchema = mongoose.Schema({
    name: {type: String, required: true, trim: true},
    desc: {type: String}
})

const Cards = mongoose.model("Cards", cardsSchema);

module.exports = Cards;