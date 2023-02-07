const statusDAO = require("../database/dao/statusDAO");


const getById = async (req, res) => {
    const {id} = req.params;
    const status = await statusDAO.getById(id);
    res.status(200).send({"Status": status});
};

const getAllStatus = async (req, res) => {
    const status = await statusDAO.getAllStatus();
    res.status(200).send({"Status": status});
}

module.exports = {
    getById,
    getAllStatus,
};