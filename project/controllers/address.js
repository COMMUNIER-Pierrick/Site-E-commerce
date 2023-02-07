const addressDAO = require("../database/dao/addressDAO");


const getById = async (req, res) => {
    const {id} = req.params;
    const address = await addressDAO.getById(id);
    res.status(200).send({"Address": address});
};

module.exports = {
    getById,
};