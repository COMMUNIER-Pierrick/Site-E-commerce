const express = require("express");
const router = express.Router();
const user = require("../controllers/user");

router.post("/register", user.insert);
router.delete("/remove-user/:id", user.remove);

router.get("/all-users", user.getAllUser);
router.get("/:id", user.getById);
router.put("/update-profile/:id", user.updateProfile);

module.exports = router;