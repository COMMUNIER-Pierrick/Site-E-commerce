const productDAO = require("../database/dao/productDAO");
const Product = require("../database/models/Product");
const log = require("./../log/logger");


const insert = async (req, res) => {
    const {productName, Category, Subcategory, price, productImg, descriptionProduct, stock} = req.body.Product;
    try{
        if(!verifString(productName)){
            return res.status(400).send({error: "Les caractères spéciaux ne sont pas admis."});
        }

        if(!verifNumber(price) || !verifNumber(stock)){
            return res.status(400).send({error: "Les caractères spéciaux, les espaces et les lettres ne sont pas admis."});
        }

        const newProduct = Product.ProductInsert(productName, Category, Subcategory, price, productImg, descriptionProduct, stock);
        const product = await productDAO.insert(newProduct);
        return res.status(201).send({"Message": "Votre produit a bien été créé", "Produit": product});

    }catch (error) {
        log.error("Error product insert :" + error);
        throw error;
    }
};

const getById = async (req, res) => {
    const {id} = req.params;
    const product = await productDAO.getById(id);
    res.status(200).send({"Product": product});
};

const getAllProducts = async (req, res) => {
    const products = await productDAO.getAllProducts();
    res.status(200).send({"Products": products});
};

const getAllProductsByProductName = async (req, res) => {
    const {productName} = req.body.Product;
    try {
        if (!verifString(productName)) {
            return res.status(400).send({error: "Les caractères spéciaux ne sont pas admis."});
        }

        const products = await productDAO.getAllProductsByProductName(productName);
        res.status(200).send({"Products": products});
    }catch (error) {
        log.error("Error product :" + error);
        throw error;
    }
};

const getAllProductsByIdCategory = async (req, res) => {
    const {id} = req.params;
    const products = await productDAO.getAllProductsByIdCategory(id);
    res.status(200).send({"Products": products});
};

const getAllProductsByIdSubcategory = async (req, res) => {
    const {id} = req.params;
    const products = await productDAO.getAllProductsByIdSubcategory(id);
    res.status(200).send({"Products": products});
};

module.exports = {
    insert,
    getById,
    getAllProducts,
    getAllProductsByProductName,
    getAllProductsByIdCategory,
    getAllProductsByIdSubcategory,
};

function verifString(str){
    const pattern = new RegExp(/[`~!@#$%^&*()_|+=?;:",.<>{}\[\]\\\/\d]/);
    return !pattern.test(str);
}

function verifNumber(str){
    const patLetter = /[a-zA-Z]/;
    const patSpace = /\s/g;
    const pattern = new RegExp(/[`~!@#$%^&*()_|+\-=?;:'",<>{}\[\]\\\/]/);
    return (!pattern.test(str) && !patSpace.test(str) && !patLetter.test(str));
}