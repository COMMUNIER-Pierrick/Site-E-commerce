const database = require("../tools/database");
const log = require("../../log/logger");

const errorMessage = "Data access error";

const SQL_INSERT_STATUS = `INSERT INTO status SET status_name = ?`;
const SQL_REMOVE_STATUS = `DELETE FROM status WHERE id = ?`;
const SQL_UPDATE_STATUS = `UPDATE status SET status_name = ? WHERE id = ?`;
const SELECT_STATUS_BY_ID = `SELECT * FROM status WHERE id = ? `;
const SELECT_ALL_STATUS = `SELECT * FROM status`;

async function getById(id){
    let con = null;
    try {
        con = await database.getConnection();
        const [rows] = await con.execute(SELECT_STATUS_BY_ID, [id]);
        return rows;
    } catch (error) {
        log.error("Error statusDAO getById : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function getAllStatus(){
    let con = null;
    try{
        con = await database.getConnection();
        const [rows] = await con.execute(SELECT_ALL_STATUS);
        return rows;
    }catch (error) {
        log.error("Error statusDAO getAllStatus : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

module.exports = {
    getById,
    getAllStatus,
}