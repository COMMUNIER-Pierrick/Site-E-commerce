const express = require("express");
const router = express.Router();
const order = require("../controllers/order");

router.get("/all-orders", order.getAllOrders);
router.get("/all-orders-by-status/:idStatus", order.getAllOrdersByStatus);
router.get("/all-orders-by-user/:idUser", order.getAllOrdersByUser);
router.get("/:id", order.getById);

module.exports = router;