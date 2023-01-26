module.exports = class Product{
    constructor(id, productName, idCategory, idSubCategory, price, productImg, descriptionProduct, dateCreated) {
        this.id = id;
        this.productName = productName;
        this.idCategory = idCategory;
        this.idSubCategory = idSubCategory;
        this.price = price;
        this.productImg = productImg;
        this.descriptionProduct = descriptionProduct;
        this.dateCreated = dateCreated;
    };

    static ProductAll(id, productName, idCategory, idSubCategory, price, productImg, descriptionProduct, dateCreated) {
        return new Product(id, productName, idCategory, idSubCategory, price, productImg, descriptionProduct, dateCreated);
    };

    static ProductUpdate(id, productName, idCategory, idSubCategory, price, productImg, descriptionProduct){
        return new Product(id, productName, null, null, price, productImg, descriptionProduct, null,);
    };

    static ProductInsert(productName, idCategory, idSubCategory, price, productImg, descriptionProduct){
        return new Product(null, productName, idCategory, idSubCategory, price, productImg, descriptionProduct,null);
    };
}