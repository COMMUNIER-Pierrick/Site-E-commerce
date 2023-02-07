const database = require('../tools/database');
const log = require("../../log/logger");

const errorMessage = "Data access error";

const SELECT_BY_ID = `SELECT * FROM payment WHERE id = ?`;

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
    getById
}