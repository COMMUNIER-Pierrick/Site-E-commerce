const paymentDAO = require("../database/dao/paymentDAO");
const getById = async (req, res) => {
    const {id} = req.params;
    const payment = await paymentDAO.getById(id);
    res.status(200).send({"Payment": payment});
};

module.exports = {
  getById,
};