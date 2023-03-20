const subcategoryDAO = require("../database/dao/subcategoryDAO");
const Subcategory = require("../database/models/Subcategory");
const log = require("../log/logger");
const productDAO = require("../database/dao/productDAO");

const insert = async (req, res) => {
    const {subcategoryName} = req.body.Subcategory;

    try {
        const subcategoryNameControl = await subcategoryDAO.getControlName(subcategoryName);
        if (subcategoryNameControl.length) {
            return res.status(409).send({error: "Il y a une sous-catégorie qui utilise déjà ce nom."});
        }

        const newSubcategory = await subcategoryDAO.insert(subcategoryName);
        const message = "La nouvelle sous-catégorie a bien été créé.";
        res.status(201).send({"Message": message, "New Subcategory": newSubcategory});

    }catch (error) {
        log.error("Error subcategoryDAO.js insert");
        throw error;
    }
};

const remove = async (req, res) => {
    const {id} = req.params;

    try {
        const productIdCategoryControl = await productDAO.getAllProductsByIdSubcategory(id);
        if (productIdCategoryControl.length) {
            return res.status(400).send({error: "Il y a des produits qui utilise encore cette sous-catégorie."});
        }

        await subcategoryDAO.remove(id);
        const message = "La sous-catégorie à bien été supprimer.";
        res.status(200).send({"Message": message});

    }catch (error) {
        log.error("Error subcategoryDAO.js remove");
        throw error;
    }
};


const update = async (req, res) => {
    const {id} = req.params;
    const {subcategoryName} = req.body.Subcategory;
    try {
        const subcategoryNameControl = await subcategoryDAO.getControlName(subcategoryName);
        if (subcategoryNameControl.length) {
            return res.status(409).send({error: "Il y a une sous-catégorie qui utilise déjà ce nom."});
        }

        const subcategory = Subcategory.SubcategoryUpdateProfile(subcategoryName);
        const newSubcategory = await subcategoryDAO.update(subcategory, id);
        res.status(200).send({"Subcategory": newSubcategory});
    }catch (error) {
        log.error("Error subcategoryDAO.js insert");
        throw error;
    }
};

const getById = async (req, res) => {
    const {id} = req.params;
    const subcategory = await subcategoryDAO.getById(id);
    res.status(200).send({"subcategory": subcategory});
};

const getAllSubcategories = async (req, res) => {
    const subcategories = await subcategoryDAO.getAllSubcategories();
    res.status(200).send({"subcategories": subcategories});
}

module.exports = {
    insert,
    remove,
    update,
    getById,
    getAllSubcategories,
};