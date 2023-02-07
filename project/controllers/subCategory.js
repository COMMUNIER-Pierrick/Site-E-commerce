const subCategoryDAO = require("../database/dao/subCategoryDAO");


const getById = async (req, res) => {
    const {id} = req.params;
    const subCategory = await subCategoryDAO.getById(id);
    res.status(200).send({"subCategory": subCategory});
};

const getAllSubCategories = async (req, res) => {
    const subCategories = await subCategoryDAO.getAllSubCategories();
    res.status(200).send({"subCategories": subCategories});
}

module.exports = {
    getById,
    getAllSubCategories,
};