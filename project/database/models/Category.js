module.exports = class Category{
    constructor(id, categoryName) {
        this.id = id;
        this.categoryName = categoryName;
    };

    static CategoryInsert(categoryName) {
        return new Category(null, categoryName);
    };

    static CategoryUpdate(categoryName) {
        return new Category(null, categoryName);
    };
}