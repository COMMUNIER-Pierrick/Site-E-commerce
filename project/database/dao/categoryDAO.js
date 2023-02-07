const database = require("../tools/database");
const log = require("../../log/logger");

const errorMessage = "Data access error";

const SQL_INSERT_CATEGORY = `INSERT INTO category SET category_name = ?`;
const SQL_REMOVE_CATEGORY = `DELETE FROM category WHERE id = ?`;
const SQL_UPDATE_CATEGORY = `UPDATE category SET category_name = ? WHERE id = ?`;
const SELECT_CATEGORY_BY_ID = `SELECT * FROM category WHERE id = ? `;
const SELECT_ALL_CATEGORIES = `SELECT * FROM category`;

async function getById(id){
    let con = null;
    try {
        con = await database.getConnection();
        const [rows] = await con.execute(SELECT_CATEGORY_BY_ID, [id]);
        return rows;
    } catch (error) {
        log.error("Error categoryDAO getById : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function getAllCategories(){
    let con = null;
    try{
        con = await database.getConnection();
        const [rows] = await con.execute(SELECT_ALL_CATEGORIES);
        return rows;
    }catch (error) {
        log.error("Error categoryDAO getAllCategories : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

module.exports = {
    getById,
    getAllCategories,
}