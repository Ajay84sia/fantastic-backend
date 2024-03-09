const express = require("express");
const router = express.Router();
const mensController = require("../controllers/mensController");

// Route to retrieve all data from the 'mens' table
router.get("/", mensController.getAll);

module.exports = router;