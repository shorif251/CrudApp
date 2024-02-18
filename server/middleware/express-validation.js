const { check } = require('express-validator');

const validationRules = {
    fullName:
    check('fullName')
    .trim()
    .notEmpty()
    .withMessage('Name is missing')
    .isLength({ max: 40 })
    .withMessage('Full-name shouldn\'t over 40 characters'),

    email:
    check('email')
    .trim()
    .notEmpty()
    .withMessage('Email is missing')
    .isEmail()
    .withMessage('Not a valid Email'),

    password:
    check('password')
    .trim()
    .notEmpty()
    .withMessage('Password is missing')
    .isStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
    .withMessage('Length must be Eight. Use Uppercase, Number and Symbol for once'),

};

const { fullName, email, password } = validationRules;

const UserValidation = [
    fullName,
    email,
    password,
];

const UserLoginValidation = [
    email,
    password,
];

module.exports = {
    UserValidation,
    UserLoginValidation,
};
