module.exports = class Basket {
    constructor(id, idUser, idProduct, dateBasket) {
        this.id = id;
        this.idUser = idUser;
        this.idProduct = idProduct;
        this.dateBasket = dateBasket;
    };
}