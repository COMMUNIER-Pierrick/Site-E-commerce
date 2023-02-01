module.exports = class Product{
    constructor(id, productName, idCategory, idSubCategory, price, productImg, descriptionProduct, stock, dateCreated) {
        this.id = id;
        this.productName = productName;
        this.idCategory = idCategory;
        this.idSubCategory = idSubCategory;
        this.price = price;
        this.productImg = productImg;
        this.descriptionProduct = descriptionProduct;
        this.stock = stock;
        this.dateCreated = dateCreated;
    };

    static ProductUpdate(id, productName, idCategory, idSubCategory, price, productImg, descriptionProduct, stock){
        return new Product(id, productName, null, null, price, productImg, descriptionProduct, stock);
    };

    static ProductInsert(productName, idCategory, idSubCategory, price, productImg, descriptionProduct, stock){
        return new Product(null, productName, idCategory, idSubCategory, price, productImg, descriptionProduct, stock);
    };
}