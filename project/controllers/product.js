const productDAO = require("../database/dao/productDAO");
const log = require("./../log/logger");


const getById = async (req, res) => {
    const {id} = req.params;
    const product = await productDAO.getById(id);
    res.status(200).send({"Product": product});
};

const getAllProducts = async (req, res) => {
    const products = await productDAO.getAllProducts();
    res.status(200).send({"Products": products});
}

module.exports = {
    getById,
    getAllProducts,
};