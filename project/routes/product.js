const express = require("express");
const router = express.Router();
const product = require("../controllers/product");

router.get("/all-products", product.getAllProducts);
router.get("/:id", product.getById);

module.exports = router;