module.exports = class Order {
    constructor(id, idStatus, idBasket, dateOrder) {
        this.id = id;
        this.idStatus = idStatus;
        this.idBasket = idBasket;
        this.dateOrder = dateOrder;
    };
}