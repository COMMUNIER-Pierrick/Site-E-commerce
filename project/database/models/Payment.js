module.exports = class Payment{
    constructor(id, card_name, card_number, card_expired_date) {
        this.id = id;
        this.card_name = card_name;
        this.card_number = card_number;
        this.card_expired_date = card_expired_date;
    };

    static PaymentUpdate(id, card_name, card_number, card_expired_date){
        return new Payment(id, card_name, card_number, card_expired_date)
    };
}