const userDAO = require("../database/dao/userDAO");

const getById = async (req, res) => {
    const {id} = req.params;
    const user = await userDAO.getById(id);
    res.status(200).send( {"User": user} );
};

module.exports = {
    getById
};