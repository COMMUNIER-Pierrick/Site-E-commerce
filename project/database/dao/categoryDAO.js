
const SQL_INSERT_CATEGORY = `INSERT INTO category SET category_name = ?`;
const SQL_REMOVE_CATEGORY = `DELETE FROM category WHERE id = ?`;
const SQL_UPDATE_CATEGORY = `UPDATE category SET category_name = ? WHERE id = ?`;
const SELECT_CATEGORY_BY_ID = `SELECT * FROM category WHERE id = ? `;
const SELECT_ALL_CATEGORY = `SELECT * FROM category`;