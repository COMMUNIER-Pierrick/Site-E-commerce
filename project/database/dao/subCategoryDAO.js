
const SQL_INSERT_SUB_CATEGORY = `INSERT INTO sub_category SET sub_category_name = ?`;
const SQL_REMOVE_SUB_CATEGORY = `DELETE FROM sub_category WHERE id = ?`;
const SQL_UPDATE_SUB_CATEGORY = `UPDATE sub_category SET sub_category_name = ? WHERE id = ?`;
const SELECT_SUB_CATEGORY_BY_ID = `SELECT * FROM sub_category WHERE id = ? `;
const SELECT_ALL_SUB_CATEGORY = `SELECT * FROM sub_category`;