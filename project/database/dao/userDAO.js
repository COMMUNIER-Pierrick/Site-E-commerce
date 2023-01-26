
const SQL_INSERT_USER = `INSERT INTO user SET firstname = ?, lastname = ?, password = ?, email = ?, id_payment = ?, id_address = ?`;
const SQL_REMOVE_USER = `DELETE FROM user WHERE id = ?`;
const SQL_UPDATE_PROFILE = `UPDATE user SET firstname = ?, lastname = ?, phone = ?, profile_img = ? WHERE id = ?`;
const SQL_UPDATE_PASSWORD = `UPDATE user SET password = ? WHERE id = ?`;
const SQL_UPDATE_EMAIL = `UPDATE user SET email = ? WHERE id = ?`;
const SQL_UPDATE_ACTIVE = `UPDATE user SET active = ? WHERE id = ?`;
const SQL_UPDATE_ADMIN = `UPDATE user SET admin = ? WHERE id = ?`;
const SQL_UPDATE_PROFILE_IMG = `UPDATE user SET profile_img = ? WHERE id = ?`;
const SELECT_USER_BY_ID = `SELECT * FROM user WHERE id = ? `;
const SELECT_ALL_USER = `SELECT * FROM user ORDER BY lastname DESC`;