const joi = require("joi");

const registerValidation = (data) => {
    const schema = joi.object().keys({
        firstname: joi
            .string()
            .pattern(/^[-'a-zA-ZÀ-ÿ\s]{1,50}$/)
            .required()
            .messages({
                "string.pattern.base": `Le Prénom ne correspond pas au modèle demandé (max 150 caractères pouvant contenir : des lettres majuscules, des lettres minuscules, des apostrophes ou 1 espace ou un tiret)`,
            }),
        lastname: joi
            .string()
            .pattern(/^[-'a-zA-ZÀ-ÿ\s]{1,50}$/)
            .required()
            .messages({
                "string.pattern.base": `Le Nom ne correspond pas au modèle demandé (max 150 caractères pouvant contenir : des lettres majuscules, des lettres minuscules, des apostrophes ou 1 espace ou un tiret)`,
            }),
        email: joi.string().required().email(),
        password: joi
            .string()
            .pattern(
                /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[-!#$@%^&*()_+|~=`{}:;'<>?,.\\\[\]\/])(?=\S+$).{6,}$/
            )
            .required()
            .messages({
                "string.pattern.base": `Le mot de passe ne correspond pas au modèle demandé (minimum 6 caractères contenant au moins : 1 lettre majuscule, 1 lettre minuscule, 1 chiffre et 1 caractère spécial (@#$%^&-+=())`,
            }),
    });
    return schema.validate(data);
};

const updateValidation = (data) => {
    console.log(data);
    const schema = joi.object().keys({
        id: joi.not().required(),
        firstname: joi
            .string()
            .pattern(/^[-'a-zA-ZÀ-ÿ\s]{1,50}$/)
            .required()
            .messages({
                "string.pattern.base": `Le Prénom ne correspond pas au modèle demandé (max 50 caractères pouvant contenir : des lettres majuscules, des lettres minuscules, des apostrophes ou 1 espace ou un tiret)`,
            }),
        lastname: joi
            .string()
            .pattern(/^[-'a-zA-ZÀ-ÿ\s]{1,50}$/)
            .required()
            .messages({
                "string.pattern.base": `Le Nom ne correspond pas au modèle demandé (max 50 caractères pouvant contenir : des lettres majuscules, des lettres minuscules, des apostrophes ou 1 espace ou un tiret)`,
            }),
        password: joi.not().required(),
        email: joi.string().required().email(),
        phone: joi
            .string()
            .pattern(/^(0|\+33)[1-9](\d{8})$/)
            .messages({
                "string.pattern.base": `Le Numéro de téléphone ne correspond pas au modèle demandé (max 10 chiffires : peut commencé par 0 ou +33)`,
            }),
        active: joi.not().required(),
        admin: joi.not().required(),
        profileImg: joi.not().required(),
        payment: joi.not().required(),
        address: joi.not().required(),
    });

    return schema.validate(data);
};

module.exports = {
    registerValidation,
    updateValidation
}