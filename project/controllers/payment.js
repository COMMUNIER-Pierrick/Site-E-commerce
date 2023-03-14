const paymentDAO = require("../database/dao/paymentDAO");
const Payment = require("../database/models/Payment");

const update = async (req, res) => {
    const {id, card_name, card_number, card_expired_date} = req.body.Payment;
    const newPayment = Payment.PaymentUpdate(id, card_name, card_number, card_expired_date);
    await paymentDAO.update(newPayment);
    res.status(200).send({"Payment": newPayment});
};

module.exports = {
    update,
};