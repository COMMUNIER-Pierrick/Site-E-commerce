const express = require("express");
const router = express.Router();
const address = require("../controllers/address");

router.post("/add-address", address.insert);

router.get("/:id", address.getById);

module.exports = router;