const express = require("express");
const router = express.Router();
const category = require("../controllers/category");

router.post("/add-new-category", category.insert);
router.delete("/remove-category/:id", category.remove);

router.get("/all-categories", category.getAllCategories);
router.get("/:id", category.getById);
router.put("/update-category/:id", category.update);

module.exports = router;