module.exports = class Category{
    constructor(id, categoryName) {
        this.id = id;
        this.categoryName = categoryName;
    };

    static CategoryUpdateProfile(categoryName){
        return new Category(null, categoryName);
    };
}