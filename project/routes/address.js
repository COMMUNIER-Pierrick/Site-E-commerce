const express = require("express");
const router = express.Router();
const address = require("../controllers/address");

router.put("/update/:id", address.update);

module.exports = router;