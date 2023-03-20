const database = require('../tools/database');
const Product = require("../models/Product");
const log = require("../../log/logger");
const categoryDAO = require("./categoryDAO");
const subCategoryDAO = require("./subcategoryDAO");

const errorMessage = "Data access error";

const SQL_INSERT_PRODUCT = `INSERT INTO product SET product_name = ?, id_category = ?, id_subcategory = ?, price = ?, product_img = ?, description_product = ?, stock = ?`;
const SQL_REMOVE_PRODUCT = `DELETE FROM product WHERE id = ?`;
const SQL_UPDATE_PRODUCT = `UPDATE product SET product_name = ?, id_category = ?, id_subcategory = ?, price = ?, description_product = ?, stock = ? WHERE id = ?`;
const SQL_UPDATE_PRODUCT_IMG = `UPDATE product SET product_img = ? WHERE id = ?`;
const SELECT_PRODUCT_BY_ID = `SELECT * FROM product WHERE id = ? `;
const SELECT_ALL_PRODUCT = `SELECT * FROM product ORDER BY product_name`;
const SELECT_ALL_PRODUCT_BY_PRODUCT_NAME = `SELECT * FROM product WHERE product_name LIKE CONCAT(?, '%')`;
const SELECT_ALL_PRODUCT_BY_ID_CATEGORY = `SELECT * FROM product WHERE id_category = ? `;
const SELECT_ALL_PRODUCT_BY_ID_SUBCATEGORY = `SELECT * FROM product WHERE id_subcategory = ? `;

async function insert(Product){
    let con = null;
    try{
        con = await database.getConnection();
        const [idCreated] = await con.execute(SQL_INSERT_PRODUCT, [Product.productName, Product.Category[0].id, Product.Subcategory[0].id, Product.price, Product.productImg, Product.descriptionProduct, Product.stock]);
        const id = idCreated.insertId;
        return await getById(id);
    }catch (error) {
        log.error("Error productDAO insert : " + error);
        throw errorMessage;
    }finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function getById(id){
    let con = null;
    try{
        con = await database.getConnection();
        const [product] = await con.execute(SELECT_PRODUCT_BY_ID, [id]);
        let category = await categoryDAO.getById(product[0]["id_category"]);
        let subcategory = await subCategoryDAO.getById(product[0]["id_subcategory"]);
        return new Product(product[0].id, product[0]["product_name"], category, subcategory, product[0].price, product[0]["product_img"], product[0]["description_product"], product[0].stock, product[0]["date_created"]);
    }catch (error) {
        log.error("Error productDAO getById : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function getAllProducts(){
    let con = null;
    try{
        con = await database.getConnection();
        const [products] = await con.execute(SELECT_ALL_PRODUCT);
        let listProductsSender = [];
        for(let i = 0; i < products.length; i++) {
            let newProduct = await getById(products[i].id);

            listProductsSender.push({"Product": newProduct});
        }
        return listProductsSender;
    }catch (error) {
        log.error("Error productDAO getAllProducts : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function getAllProductsByProductName(productName){
    let con = null;
    try{
        con = await database.getConnection();
        const [products] = await con.execute(SELECT_ALL_PRODUCT_BY_PRODUCT_NAME, [productName]);
        let listProductsSender = [];
        for(let i = 0; i < products.length; i++) {
            let newProduct = await getById(products[i].id);

            listProductsSender.push({"Product": newProduct});
        }
        return listProductsSender;
    }catch (error) {
        log.error("Error productDAO getAllProductsByProductName : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function getAllProductsByIdCategory(id){
    let con = null;
    try{
        con = await database.getConnection();
        const [products] = await con.execute(SELECT_ALL_PRODUCT_BY_ID_CATEGORY, [id]);
        let listProductsSender = [];
        for(let i = 0; i < products.length; i++) {
            let newProduct = await getById(products[i].id);

            listProductsSender.push({"Product": newProduct});
        }
        return listProductsSender;
    }catch (error) {
        log.error("Error productDAO getAllProductsByIdCategory : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function getAllProductsByIdSubcategory(id){
    let con = null;
    try{
        con = await database.getConnection();
        const [products] = await con.execute(SELECT_ALL_PRODUCT_BY_ID_SUBCATEGORY, [id]);
        let listProductsSender = [];
        for(let i = 0; i < products.length; i++) {
            let newProduct = await getById(products[i].id);

            listProductsSender.push({"Product": newProduct});
        }
        return listProductsSender;
    }catch (error) {
        log.error("Error productDAO getAllProductsByIdSubcategory : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

module.exports = {
    insert,
    getById,
    getAllProducts,
    getAllProductsByProductName,
    getAllProductsByIdCategory,
    getAllProductsByIdSubcategory,
}