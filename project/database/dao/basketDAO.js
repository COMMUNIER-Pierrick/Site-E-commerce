const database = require("../tools/database");
const userDAO = require("./userDAO");
const productDAO = require("./productDAO");
const Basket = require("../models/Basket");
const log = require("../../log/logger");

const errorMessage = "Data access error";

const SQL_INSERT_BASKET = `INSERT INTO basket SET id_user = ?, id_product = ?`;
const SQL_REMOVE_BASKET = `DELETE FROM basket WHERE id = ?`;
const SQL_UPDATE_BASKET = `UPDATE basket SET id_product = ? WHERE id = ?`;
const SELECT_BASKET_BY_ID = `SELECT * FROM basket b
        INNER JOIN user u ON b.id_user = u.id
        INNER JOIN product p ON b.id_product = p.id
        WHERE b.id = ? `;
const SELECT_BASKET_BY_ID_USER = `SELECT DISTINCT b.id, b.id_user, b.id_product, b.date_basket FROM basket b
        INNER JOIN user u ON b.id_user = u.id
        INNER JOIN product p ON b.id_product = p.id
        WHERE u.id = ? `;


async function getById(id){
    let con = null;
    try{
        con = await database.getConnection();
        const [basket] = await con.execute(SELECT_BASKET_BY_ID, [id]);
        let user = await userDAO.getById(basket[0].id_user);
        delete user.password;
        let product = await productDAO.getById(basket[0].id_product);
        return new Basket(id, user, product, basket[0].date_basket);
    }catch (error) {
        log.error("Error basketDAO getById : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function getBasketByIdUser(idUser){
    let con = null;
    try{
        con = await database.getConnection();
        const [basket] = await con.execute(SELECT_BASKET_BY_ID_USER, [idUser]);
        let user = await userDAO.getById(basket[0].id_user);
        delete user.password;
        let product = await productDAO.getById(basket[0].id_product);
        return new Basket(basket[0].id, user, product, basket[0].date_basket);
    }catch (error) {
        log.error("Error basketDAO getBasketByIdUser : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

module.exports = {
    getById,
    getBasketByIdUser,
}