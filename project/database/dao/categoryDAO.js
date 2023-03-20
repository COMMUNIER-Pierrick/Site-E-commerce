const database = require("../tools/database");
const log = require("../../log/logger");

const errorMessage = "Data access error";

const SQL_INSERT_CATEGORY = `INSERT INTO category SET category_name = ?`;
const SQL_REMOVE_CATEGORY = `DELETE FROM category WHERE id = ?`;
const SQL_UPDATE_CATEGORY = `UPDATE category SET category_name = ? WHERE id = ?`;
const SELECT_CATEGORY_BY_ID = `SELECT * FROM category WHERE id = ? `;
const SELECT_ALL_CATEGORIES = `SELECT * FROM category`;
const SELECT_CONTROL_NAME = `SELECT category_name FROM category WHERE category_name = ?`;

async function insert(categoryName){
    let con = null;
    try{
        con = await database.getConnection();
        const [categoryCreated] = await con.execute(SQL_INSERT_CATEGORY, [categoryName]);
        const idCategory = categoryCreated.insertId;
        return getById(idCategory);
    }catch (error){
        log.error("Error categoryDAO insert : " + error);
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
        await con.execute(SQL_REMOVE_CATEGORY, [id]);
    }catch (error) {
        log.error("Error categoryDAO remove : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

async function update(category, id){
    let con = null;
    try{
        con = await database.getConnection();
        await con.execute(SQL_UPDATE_CATEGORY, [category.categoryName, id]);
        return await getById(id);
    }catch (error) {
        log.error("Error categoryDAO update : " + error);
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

async function getControlName(categoryName){
    let con = null;
    try{
        con = await database.getConnection();
        const [category] = await con.execute(SELECT_CONTROL_NAME, [categoryName]);
        return category;
    }catch (error) {
        log.error("Error categoryDAO getControlName : " + error);
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
    getAllCategories,
    getControlName,
}