const express = require("express");
const router = express.Router();
const user = require("../controllers/user");

router.get("/all-users", user.getAllUser);
router.get("/:id", user.getById);
router.put("/update-profile/:id", user.updateProfile);

module.exports = router;