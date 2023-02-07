const categoryDAO = require("../database/dao/categoryDAO");


const getById = async (req, res) => {
    const {id} = req.params;
    const category = await categoryDAO.getById(id);
    res.status(200).send({"Category": category});
};

const getAllCategories = async (req, res) => {
    const categories = await categoryDAO.getAllCategories();
    res.status(200).send({"Categories": categories});
}

module.exports = {
    getById,
    getAllCategories,
};