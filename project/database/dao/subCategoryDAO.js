const database = require("../tools/database");
const log = require("../../log/logger");

const errorMessage = "Data access error";

const SQL_INSERT_SUB_CATEGORY = `INSERT INTO sub_category SET sub_category_name = ?`;
const SQL_REMOVE_SUB_CATEGORY = `DELETE FROM sub_category WHERE id = ?`;
const SQL_UPDATE_SUB_CATEGORY = `UPDATE sub_category SET sub_category_name = ? WHERE id = ?`;
const SELECT_SUB_CATEGORY_BY_ID = `SELECT * FROM sub_category WHERE id = ? `;
const SELECT_ALL_SUB_CATEGORIES = `SELECT * FROM sub_category`;

async function getById(id){
    let con = null;
    try {
        con = await database.getConnection();
        const [rows] = await con.execute(SELECT_SUB_CATEGORY_BY_ID, [id]);
        return rows;
    } catch (error) {
        log.error("Error subCategoryDAO getById : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function getAllSubCategories(){
    let con = null;
    try{
        con = await database.getConnection();
        const [rows] = await con.execute(SELECT_ALL_SUB_CATEGORIES);
        return rows;
    }catch (error) {
        log.error("Error categoryDAO getAllSubCategories : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

module.exports = {
    getById,
    getAllSubCategories,
}