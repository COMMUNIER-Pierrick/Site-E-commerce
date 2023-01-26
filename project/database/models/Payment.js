module.exports = class Payment{
    constructor(id, cardName, cardNumber, cardExpiredDate) {
        this.id = id;
        this.cardName = cardName;
        this.cardNumber = cardNumber;
        this.cardExpiredDate = cardExpiredDate;
    };
}