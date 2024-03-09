const Mens = require("../models/mensModel");

const mensController = {};

mensController.getAll = (req, res) => {
    Mens.getAll((error, results) => {
        if (error) {
            console.error("Error retrieving data:", error);
            res.status(500).json({ error: "Internal server error" });
        } else {
            res.status(200).json(results);
        }
    });
};

module.exports = mensController;