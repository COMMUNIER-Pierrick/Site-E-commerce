const express = require("express");
const router = express.Router();
const product = require("../controllers/product");

router.post("/add-new-product", product.insert);

router.get("/all-products", product.getAllProducts);
router.get("/all-products-by-product-name", product.getAllProductsByProductName);
router.get("/all-products-by-category/:id", product.getAllProductsByIdCategory);
router.get("/all-products-by-subcategory/:id", product.getAllProductsByIdSubcategory);

module.exports = router;