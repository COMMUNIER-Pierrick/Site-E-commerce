const express = require("express");
const router = express.Router();
const subcategory = require("../controllers/subcategory");

router.post("/add-new-subcategory", subcategory.insert);
router.delete("/remove-subcategory/:id", subcategory.remove);

router.get("/all-subcategories", subcategory.getAllSubcategories);
router.get("/:id", subcategory.getById);
router.put("/update-subcategory/:id", subcategory.update);

module.exports = router;