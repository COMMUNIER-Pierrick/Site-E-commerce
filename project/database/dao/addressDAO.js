const database = require('../tools/database');
const log = require("../../log/logger");

const errorMessage = "Data access error";

const SQL_INSERT_ADDRESS = `INSERT INTO address SET number = ?, street = ?, additional_address = ?, zipcode = ?, city = ?, country = ?`;
const SQL_REMOVE_ADDRESS = `DELETE FROM address WHERE id = ?`;
const SQL_UPDATE_ADDRESS = `UPDATE address SET number = ?, street = ?, additional_address = ?, zipcode = ?, city = ?, country = ? WHERE id = ?`;
const SELECT_ADDRESS_BY_ID = `SELECT * FROM address WHERE id = ? `;

async function insert(Address){
    let con = null;
    try{
        con = await database.getConnection();
        const [addressCreated] = await con.execute(SQL_INSERT_ADDRESS, [Address.number, Address.street, Address.additionalAddress, Address.zipCode, Address.city, Address.country]);
        const id = addressCreated.insertId;
        const [address] = await getById(id);
        return address;
    }catch (error){
        log.error("Error addressDAO insert : " + error);
        throw errorMessage;
    }finally {
        if (con !== null) {
            con.end();
        }
    }
}
async function getById(id){
    let con = null;
    try {
        con = await database.getConnection();
        const [address] = await con.execute(SELECT_ADDRESS_BY_ID, [id]);
        return address;
    } catch (error) {
        log.error("Error addressDAO getById : " + error);
        throw errorMessage;
    } finally {
        if (con !== null) {
            con.end();
        }
    }
}

module.exports = {
    insert,
    getById,
}