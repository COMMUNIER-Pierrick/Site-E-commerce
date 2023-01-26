
const SQL_INSERT_BASKET = `INSERT INTO basket SET id_user = ?, id_product = ?`;
const SQL_REMOVE_BASKET = `DELETE FROM basket WHERE id = ?`;
const SQL_UPDATE_BASKET = `UPDATE basket SET id_product = ? WHERE id = ?`;
const SELECT_BASKET_BY_ID = `SELECT * FROM basket b
        INNER JOIN user u ON b.id_user = u.id
        INNER JOIN product p ON b.id_product = p.id
        WHERE b.id = ? `;
const SELECT_BASKET_BY_ID_USER = `SELECT * FROM basket b
        INNER JOIN user u ON b.id_user = u.id
        INNER JOIN product p ON b.id_product = p.id
        WHERE u.id = ? `;
const SELECT_ALL_BASKET = `SELECT * FROM basket b
        INNER JOIN user u ON b.id_user = u.id
        INNER JOIN product p ON b.id_product = p.id
        WHERE b.date_basket = ? `;