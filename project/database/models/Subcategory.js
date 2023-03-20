module.exports = class Subcategory{
    constructor(id, subcategoryName) {
        this.id = id;
        this.subcategoryName = subcategoryName;
    };

    static SubcategoryUpdateProfile(subcategoryName){
        return new Subcategory(null, subcategoryName);
    };
}