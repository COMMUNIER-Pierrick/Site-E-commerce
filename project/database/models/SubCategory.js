module.exports = class SubCategory{
    constructor(id, subCategoryName) {
        this.id = id;
        this.subCategoryName = subCategoryName;
    };

    static SubCategoryInsert(subCategoryName) {
        return new SubCategory(null, subCategoryName);
    };

    static SubCategoryUpdate(subCategoryName) {
        return new SubCategory(null, subCategoryName);
    };
}