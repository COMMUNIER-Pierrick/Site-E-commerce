module.exports = class User {

    constructor(id, firstname, lastname, password, email, phone, active, admin, profileImg, payment, address) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.active = active;
        this.admin = admin;
        this.profileImg = profileImg;
        this.payment = payment;
        this.address = address;
    };

    static UserAll(id, firstname, lastname, password, email, phone, active, admin, profileImg, payment, address){
        return new User(id, firstname, lastname, password, email, phone, active, admin, profileImg, payment, address);
    };

    static UserUpdateProfile(firstname, lastname, email, phone){
        return new User(null, firstname, lastname, null, email, phone, null, null, null, null, null);
    };

    static UserInsert(firstname, lastname, password, email, active, admin, payment, address){
        return new User(null, firstname, lastname, password, email,null, null, null, null, null, address)
    };
}