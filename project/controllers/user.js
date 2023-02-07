const userDAO = require("../database/dao/userDAO");
const User = require("../database/models/User");
const {updateValidation} = require("../services/validation");
const log = require("./../log/logger");

const updateProfile = async (req, res) => {
    const {id} = req.params;
    let userData = req.body.User;
    const user = User.UserUpdateProfile(userData[0].firstname, userData[0].lastname, userData[0].email, userData[0].phone);

    const {error} = updateValidation(user);
    if(error){
        log.error("Error update : " + error.details[0].message);
        return res.status(400).send({ error: error.details[0].message });
    }

    try{
        const newUser = await userDAO.updateProfile(user, id);
        delete newUser.password;
        const message = "mise à jour réussi.";
        res.status(200).send({"Message": message, "User": newUser});
    }catch (error) {
        log.error("Error userDAO update");
        throw error;
    }
};

const getById = async (req, res) => {
    const {id} = req.params;
    const user = await userDAO.getById(id);
    res.status(200).send({"User": user});
};

const getAllUser = async (req, res) => {
    const user = await userDAO.getAllUser();
    res.status(200).send({"Users": user});
}

module.exports = {
    updateProfile,
    getById,
    getAllUser,
};