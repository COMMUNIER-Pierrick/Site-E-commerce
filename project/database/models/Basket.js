module.exports = class Basket {
    constructor(id, User, Product, dateBasket) {
        this.id = id;
        this.User = User;
        this.Product = Product;
        this.dateBasket = dateBasket;
    };
}