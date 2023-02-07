const express = require("express");
const router = express.Router();
const category = require("../controllers/category");

router.get("/all-categories", category.getAllCategories);
router.get("/:id", category.getById);

module.exports = router;