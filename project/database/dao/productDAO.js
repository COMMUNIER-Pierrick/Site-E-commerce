const database = require('../tools/database');
const Product = require("../models/Product");
const log = require("../../log/logger");
const categoryDAO = require("./categoryDAO");
const subCategoryDAO = require("./subCategoryDAO");

const errorMessage = "Data access error";

const SQL_INSERT_PRODUCT = `INSERT INTO product SET product_name = ?, id_category = ?, id_sub_category = ?, price = ?, product_img = ?, description_product = ?, stock = ?`;
const SQL_REMOVE_PRODUCT = `DELETE FROM product WHERE id = ?`;
const SQL_UPDATE_PRODUCT = `UPDATE product SET product_name = ?, id_category = ?, id_sub_category = ?, price = ?, description_product = ?, stock = ? WHERE id = ?`;
const SQL_UPDATE_PRODUCT_IMG = `UPDATE product SET product_img = ? WHERE id = ?`;
const SELECT_PRODUCT_BY_ID = `SELECT * FROM product WHERE id = ? `;
const SELECT_ALL_PRODUCT = `SELECT * FROM product ORDER BY product_name`;


async function getById(id){
    let con = null;
    try{
        con = await database.getConnection();
        const [product] = await con.execute(SELECT_PRODUCT_BY_ID, [id]);
        let category = await categoryDAO.getById(product[0].id_category);
        let subCategory = await subCategoryDAO.getById(product[0].id_sub_category);
        return new Product(product[0].id, product[0].product_name, category, subCategory, product[0].price, product[0].product_img, product[0].description_product, product[0].stock, product[0].date_created);
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

module.exports = {
    getById,
    getAllProducts,
}