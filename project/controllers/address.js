const addressDAO = require("../database/dao/addressDAO");
const Address = require("../database/models/Address");
const log = require("../log/logger");

const insert = async (req, res) => {
    const {number, street, additionalAddress, zipCode, city, country} = req.body.Address;
    const newAddress = Address.AddressInsert(number, street, additionalAddress, zipCode, city, country);
    const address = await addressDAO.insert(newAddress);
    res.status(200).send({"Address": address});
}

const getById = async (req, res) => {
    const {id} = req.params;
    const address = await addressDAO.getById(id);
    res.status(200).send({"Address": address});
};

module.exports = {
    insert,
    getById,
};