const express = require("express");
const router = express.Router();
const address = require("../controllers/address");

router.get("/:id", address.getById);

module.exports = router;