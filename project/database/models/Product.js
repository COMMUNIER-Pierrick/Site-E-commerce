module.exports = class Product{
    constructor(id, productName, Category, Subcategory, price, productImg, descriptionProduct, stock, dateCreated) {
        this.id = id;
        this.productName = productName;
        this.Category = Category;
        this.Subcategory = Subcategory;
        this.price = price;
        this.productImg = productImg;
        this.descriptionProduct = descriptionProduct;
        this.stock = stock;
        this.dateCreated = dateCreated;
    };

    static ProductUpdate(id, productName, Category, Subcategory, price, productImg, descriptionProduct, stock){
        return new Product(id, productName, null, null, price, productImg, descriptionProduct, stock);
    };

    static ProductInsert(productName, Category, Subcategory, price, productImg, descriptionProduct, stock){
        return new Product(null, productName, Category, Subcategory, price, productImg, descriptionProduct, stock);
    };
}