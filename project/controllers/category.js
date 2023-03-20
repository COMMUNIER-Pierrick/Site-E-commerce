const categoryDAO = require("../database/dao/categoryDAO");
const productDAO = require("../database/dao/productDAO");
const log = require("../log/logger");
const Category = require("../database/models/Category");

const insert = async (req, res) => {
    const {categoryName} = req.body.Category;

    try {
        const categoryNameControl = await categoryDAO.getControlName(categoryName);
        if (categoryNameControl.length) {
            return res.status(400).send({error: "Il y a une catégorie qui utilise déjà ce nom."});
        }

        const newCategory = await categoryDAO.insert(categoryName);
        const message = "La nouvelle catégorie a bien été créé.";
        res.status(201).send({"Message": message, "New Category": newCategory});

    }catch (error) {
        log.error("Error categoryDAO.js insert");
        throw error;
    }
};

const remove = async (req, res) => {
    const {id} = req.params;

    try {
        const productIdCategoryControl = await productDAO.getAllProductsByIdCategory(id);
        if (productIdCategoryControl.length) {
            return res.status(400).send({error: "Il y a des produits qui utilise encore cette catégorie."});
        }

        await categoryDAO.remove(id);
        const message = "La catégorie à bien été supprimer.";
        res.status(200).send({"Message": message});

    }catch (error) {
        log.error("Error categoryDAO.js remove");
        throw error;
    }
};

const update = async (req, res) => {
    const {id} = req.params;
    const {categoryName} = req.body.Category;
    try {
        const categoryNameControl = await categoryDAO.getControlName(categoryName);
        if (categoryNameControl.length) {
            return res.status(400).send({error: "Il y a une catégorie qui utilise déjà ce nom."});
        }

        const category = Category.CategoryUpdateProfile(categoryName);
        const newCategory = await categoryDAO.update(category, id);
        res.status(200).send({"Category": newCategory});
    }catch (error) {
        log.error("Error categoryDAO.js insert");
        throw error;
    }
};

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
    insert,
    remove,
    update,
    getById,
    getAllCategories,
};