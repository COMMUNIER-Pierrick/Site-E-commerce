const basketDAO = require("../database/dao/basketDAO");

const getById = async (req, res) => {
    const {id} = req.params;
    const basket = await basketDAO.getById(id);
    res.status(200).send({"Basket": basket});
};

const getBasketByIdUser = async (req, res) => {
    const {idUser} = req.params;
    const basket = await basketDAO.getBasketByIdUser(idUser);
    res.status(200).send({"Basket": basket});
}

module.exports = {
    getById,
    getBasketByIdUser,
};