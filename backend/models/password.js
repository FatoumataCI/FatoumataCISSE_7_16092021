const passwordValidator = require('password-validator');

//creation schema
let schema = new passwordValidator();

//ajout des propriétes
schema
    .is().min(6) //longueur min 6
    .is().max(50) //longuer max 50
    .has().uppercase() //doit avoir au moins une majuscule
    .has().lowercase() // doit avoir au moins une miniscule
    .has().digits(1) // doit avoir au moins 1chiffre
    .has().not().spaces() //ne doit pas avoir d'espaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist de valeurs à proscrire

module.exports = schema;