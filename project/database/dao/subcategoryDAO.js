const database = require("../tools/database");
const log = require("../../log/logger");

const errorMessage = "Data access error";

const SQL_INSERT_SUBCATEGORY = `INSERT INTO subcategory SET subcategory_name = ?`;
const SQL_REMOVE_SUBCATEGORY = `DELETE FROM subcategory WHERE id = ?`;
const SQL_UPDATE_SUBCATEGORY = `UPDATE subcategory SET subcategory_name = ? WHERE id = ?`;
const SELECT_SUBCATEGORY_BY_ID = `SELECT * FROM subcategory WHERE id = ? `;
const SELECT_ALL_SUBCATEGORIES = `SELECT * FROM subcategory`;
const SELECT_CONTROL_NAME = `SELECT subcategory_name FROM subcategory WHERE subcategory_name = ?`;

async function insert(subcategoryName){
    let con = null;
    try{
        con = await database.getConnection();
        const [subcategoryCreated] = await con.execute(SQL_INSERT_SUBCATEGORY, [subcategoryName]);
        const idSubcategory = subcategoryCreated.insertId;
        return getById(idSubcategory);
    }catch (error){
        log.error("Error subcategoryDAO insert : " + error);
        throw errorMessage;
    }finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function remove(id){
    let con = null
    try{
        con = await database.getConnection();
        await con.execute(SQL_REMOVE_SUBCATEGORY, [id]);
    }catch (error) {
        log.error("Error subcategoryDAO remove : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function update(subcategory, id){
    let con = null;
    try{
        con = await database.getConnection();
        await con.execute(SQL_UPDATE_SUBCATEGORY, [subcategory.subcategoryName, id]);
        return await getById(id);
    }catch (error) {
        log.error("Error subcategoryDAO update : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function getById(id){
    let con = null;
    try {
        con = await database.getConnection();
        const [idSubcategory] = await con.execute(SELECT_SUBCATEGORY_BY_ID, [id]);
        return idSubcategory;
    } catch (error) {
        log.error("Error subcategoryDAO getById : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function getAllSubcategories(){
    let con = null;
    try{
        con = await database.getConnection();
        const [subcategories] = await con.execute(SELECT_ALL_SUBCATEGORIES);
        return subcategories;
    }catch (error) {
        log.error("Error subcategoryDAO getAllSubcategories : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function getControlName(subcategoryName){
    let con = null;
    try{
        con = await database.getConnection();
        const [subcategory] = await con.execute(SELECT_CONTROL_NAME, [subcategoryName]);
        return subcategory;
    }catch (error) {
        log.error("Error subcategoryDAO getControlName : " + error);
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
    getById,
    getAllSubcategories,
    getControlName,
}