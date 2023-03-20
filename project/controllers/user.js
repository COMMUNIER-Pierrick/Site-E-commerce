const userDAO = require("../database/dao/userDAO");
const paymentDAO = require("../database/dao/paymentDAO");
const addressDAO = require("../database/dao/addressDAO");
const User = require("../database/models/User");
const {updateValidation, registerValidation} = require("../services/validation");
const log = require("./../log/logger");
const bcrypt = require("bcryptjs");

const insert = async (req, res) => {

    const {firstname, lastname, password, email} = req.body.User;
    const { error } = registerValidation(req.body.User);
    if(error){
        log.error("Error register : " + error.details[0].message);
        return res.status(400).send({ error: error.details[0].message });
    }

    try {
        const userControl = await userDAO.getControlUser(email);
        if (userControl.length) {
            return res.status(409).send({error: "Il y a un compte qui utilise déjà cet email"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = User.UserInsert(firstname, lastname, hashedPassword, email);

        const user = await userDAO.insert(newUser);
        delete user.password;

        return res.status(201).send({"Message": "Votre compte a bien été créé", "User": user});

    }catch (error) {
        log.error("Error userDAO.js Register");
        throw error;
    }
};

const remove = async (req, res) => {
/* Ajouter une condition pour que le compte soit supprimer (la dernière commande doit dater de plus de 60 jours par rapport a la date actuelle) */
    const {id} = req.params;
    const user = await userDAO.getById(id);
    await userDAO.remove(user.id);
    await paymentDAO.remove(user.payment[0].id);
    await addressDAO.remove(user.address[0].id);
    const message = "L'utilisateur à bien été supprimer.";
    res.status(200).send({"Message": message});
};

const updateProfile = async (req, res) => {

    const {id} = req.params;
    let userData = req.body.User;
    const user = User.UserUpdateProfile(userData.firstname, userData.lastname, userData.email, userData.phone);

    const {error} = updateValidation(user);
    if(error){
        log.error("Error update : " + error.details[0].message);
        return res.status(400).send({ error: error.details[0].message});
    }

    try{
        const userControl = await userDAO.getControlUser(user.email);
        if (userControl.length) {
            return res.status(409).send({error: "Il y a un compte qui utilise déjà cet email"});
        }

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
    insert,
    remove,
    updateProfile,
    getById,
    getAllUser,
};