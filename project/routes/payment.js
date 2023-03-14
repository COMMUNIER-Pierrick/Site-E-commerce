const express = require("express");
const router = express.Router();
const payment = require("../controllers/payment");

router.put("/update/:id", payment.update);

module.exports = router;