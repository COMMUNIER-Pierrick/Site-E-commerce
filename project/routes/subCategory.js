const express = require("express");
const router = express.Router();
const subCategory = require("../controllers/subCategory");

router.get("/all-sub-categories", subCategory.getAllSubCategories);
router.get("/:id", subCategory.getById);

module.exports = router;