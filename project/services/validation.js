const joi = require("joi");

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
    updateValidation
}