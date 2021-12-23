const express = require("express");
require("dotenv").config();
const axios = require("axios");
const Cards = require("../models/cards");

//! SEED/SYNC
const URL = "https://api.trello.com/1";
const PLACEHOLDER = "jeffc138";
const KEY = process.env.TRELLO_KEY;
const TOKEN = process.env.TRELLO_TOKEN;

const syncCards = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: "Please provide user's data.",
        });
    }
    
    //! !!!!!!!!!!!!!!!!
    const boardArray = req.body.boardArray;
    console.log(boardArray);
    //! !!!!!!!!!!!!!!!!

    try {
        
        const response = await axios.get(`${URL}/members/${PLACEHOLDER}/boards?key=${KEY}&token=${TOKEN}`);
        // console.log(response.data);
        //! response.data here is the board information for this user => proceed to create all cards on these boards.
        response.data.forEach(async board => {
            const boardID = board.shortLink;
            const response = await axios.get(`${URL}/boards/${boardID}/cards?key=${KEY}&token=${TOKEN}`);
            // console.log(response.data);
            const ArrayOfCards = response.data;
            await Cards.deleteMany({});
            await Cards.create(ArrayOfCards);
        });

        res.status(201).json({
            success: true,
            message: "Data synced!",
        });

    } catch {
        res.status(400).json({
            err,
            message: "Sync failed!",
        })
    }
}


module.exports = {
    syncCards,
}