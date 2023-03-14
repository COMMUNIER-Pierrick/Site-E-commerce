const database = require('../tools/database');
const log = require("../../log/logger");

const errorMessage = "Data access error";

const SQL_INSERT_PAYMENT = `INSERT INTO payment SET card_name = ?, card_number = ?, card_expired_date = ?`;
const SQL_DELETE_PAYMENT = `DELETE FROM payment WHERE id = ?`;
const SQL_UPDATE_PAYMENT = `UPDATE payment SET card_name = ?, card_number = ?, card_expired_date = ? WHERE id = ?`;
const SELECT_BY_ID = `SELECT * FROM payment WHERE id = ?`;

async function insert(){
    let con = null;
    try{
        con = await database.getConnection();
        const [paymentCreated] = await con.execute(SQL_INSERT_PAYMENT, ['','','']);
        return paymentCreated.insertId;
    }catch (error){
        log.error("Error paymentDAO insert : " + error);
        throw errorMessage;
    }finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function remove(id){
    let con = null;
    try{
        con = await database.getConnection();
        await con.execute(SQL_DELETE_PAYMENT, [id]);
    }catch (error) {
        log.error("Error paymentDAO delete : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function update(Payment){
    let con = null;
    try{
        con = await database.getConnection();
        await con.execute(SQL_UPDATE_PAYMENT, [Payment.card_name, Payment.card_number, Payment.card_expired_date, Payment.id]);
    }catch (error){
        log.error("Error paymentDAO update : " + error);
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
        const [payment] = await con.execute(SELECT_BY_ID, [id]);
        return payment;
    }catch (error) {
        log.error("Error paymentDAO getById : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

module.exports = {
    insert,
    remove,
    update,
    getById
}