const express = require("express");
const router = express.Router();
const basket = require("../controllers/basket");

router.get("/:id", basket.getById);
router.get("/user/:idUser", basket.getBasketByIdUser);

module.exports = router;