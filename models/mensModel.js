const db = require("../config/db");

const Mens = {};

Mens.getAll = (callback) => {
    const query = "SELECT * FROM mens";
    db.query(query, callback);
};

module.exports = Mens;