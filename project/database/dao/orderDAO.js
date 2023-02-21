const database = require('../tools/database');
const log = require("../../log/logger");
const basketDAO = require("./basketDAO");
const statusDAO = require("./statusDAO");
const Order = require("../models/Order");

const errorMessage = "Data access error";

const SQL_INSERT_ORDER = `INSERT INTO \`order\` SET id_status = ?, id_basket = ?, date_order = ?`;
const SQL_REMOVE_ORDER = `DELETE FROM \`order\` WHERE id = ?`;
const SQL_UPDATE_ORDER = `UPDATE \`order\` SET id_status = ?, date_order = ? WHERE id = ?`;
const SELECT_ORDER_BY_ID = `SELECT * FROM \`order\` WHERE id = ? `;
const SELECT_ALL_ORDERS = `SELECT * FROM \`order\` ORDER BY date_order`;
const SELECT_ALL_ORDERS_BY_ID_STATUS = `SELECT * FROM \`order\` WHERE id_status = ?`;
const SELECT_ALL_ORDERS_BY_ID_USER = `SELECT DISTINCT o.id, o.id_status, o.id_basket, o.date_order FROM \`order\` o
         INNER JOIN basket b ON o.id_basket = b.id
         WHERE b.id_user = ?`;

async function getById(id){
    let con = null;
    try{
        con = await database.getConnection();
        const [order] = await con.execute(SELECT_ORDER_BY_ID, [id]);
        let status = await statusDAO.getById(order[0].id_status);
        let basket = await basketDAO.getById(order[0].id_basket);
        return new Order(order[0].id, status, basket, order[0].date_order);
    }catch (error) {
        log.error("Error orderDAO getById : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function getAllOrders(){
    let con = null;
    try{
        con = await database.getConnection();
        const [orders] = await con.execute(SELECT_ALL_ORDERS);
        let listOrdersSender = [];
        for(let i = 0; i < orders.length; i++) {
            let newOrder = await getById(orders[i].id);

            listOrdersSender.push({"Order": newOrder});
        }
        return listOrdersSender;
    }catch (error) {
        log.error("Error orderDAO getAllOrders : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function getAllOrdersByStatus(idStatus){
    let con = null;
    try{
        con = await database.getConnection();
        const [orders] = await con.execute(SELECT_ALL_ORDERS_BY_ID_STATUS, [idStatus]);
        let listOrdersSender = [];
        for(let i = 0; i < orders.length; i++) {
            let newOrder = await getById(orders[i].id);

            listOrdersSender.push({"Order": newOrder});
        }
        return listOrdersSender;
    }catch (error) {
        log.error("Error orderDAO getAllOrdersByStatus : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function getAllOrdersByUser(idUser){
    let con = null;
    try{
        con = await database.getConnection();
        const [orders] = await con.execute(SELECT_ALL_ORDERS_BY_ID_USER, [idUser]);
        let listOrdersSender = [];
        for(let i = 0; i < orders.length; i++) {
            let newOrder = await getById(orders[i].id);

            listOrdersSender.push({"Order": newOrder});
        }
        return listOrdersSender;
    }catch (error) {
        log.error("Error orderDAO getAllOrdersByUser : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

module.exports = {
    getById,
    getAllOrders,
    getAllOrdersByStatus,
    getAllOrdersByUser,
}