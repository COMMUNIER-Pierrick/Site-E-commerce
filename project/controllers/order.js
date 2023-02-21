const orderDAO = require("../database/dao/orderDAO");
const log = require("./../log/logger");

const getById = async (req, res) => {
    const {id} = req.params;
    const order = await orderDAO.getById(id);
    res.status(200).send({"Order": order});
};

const getAllOrders = async (req, res) => {
    const orders = await orderDAO.getAllOrders();
    res.status(200).send({"Orders": orders});
}

const getAllOrdersByStatus = async (req, res) => {
    const {idStatus} = req.params;
    const orders = await orderDAO.getAllOrdersByStatus(idStatus);
    res.status(200).send({"Orders": orders});
}

const getAllOrdersByUser = async (req, res) => {
    const {idUser} = req.params;
    const orders = await orderDAO.getAllOrdersByUser(idUser);
    res.status(200).send({"Orders": orders});
}

module.exports = {
    getById,
    getAllOrders,
    getAllOrdersByStatus,
    getAllOrdersByUser,
};