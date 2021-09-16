const schema = require("../models/password");


// vérifie que le mot de passe valide le schema décrit
module.exports = (req, res, next) => {
    if (!schema.validate(req.body.password)) {
        res.status(401).json({
            error: ('Mot de passe faible !')
        });
    } else {
        next();
    }
};