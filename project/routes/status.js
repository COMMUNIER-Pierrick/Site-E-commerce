const express = require("express");
const router = express.Router();
const status = require("../controllers/status");

router.get("/all-status", status.getAllStatus);
router.get("/:id", status.getById);

module.exports = router;