const addressDAO = require("../database/dao/addressDAO");
const Address = require("../database/models/Address");
const log = require("../log/logger");

const update = async (req, res) => {
    const {id} = req.params;
    const {number, street, additionalAddress, zipCode, city, country} = req.body.Address;
    const newAddress = Address.AddressUpdate(id, number, street, additionalAddress, zipCode, city, country);
    await addressDAO.update(newAddress);
    res.status(200).send({"Address": newAddress});
};

module.exports = {
    update,
};