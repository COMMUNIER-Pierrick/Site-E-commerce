
const SQL_INSERT_ADDRESS = `INSERT INTO address SET number = ?, street = ?, additional_address = ?, zipcode = ?, city = ?, country = ?`;
const SQL_REMOVE_ADDRESS = `DELETE FROM address WHERE id = ?`;
const SQL_UPDATE_ADDRESS = `UPDATE address SET number = ?, street = ?, additional_address = ?, zipcode = ?, city = ?, country = ? WHERE id = ?`;
const SELECT_ADDRESS_BY_ID = `SELECT * FROM address WHERE id = ? `;