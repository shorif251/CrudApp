const { check } = require('express-validator');

const validationRules = {
  fullName: check('fullName')
    .trim()
    .notEmpty()
    .withMessage('Name is missing')
    .isLength({ max: 40 })
    .withMessage("Full-name shouldn't over 40 characters"),

  firstName: check('firstName')
    .trim()
    .notEmpty()
    .withMessage('First Name is missing')
    .isLength({ max: 20 })
    .withMessage("Full-name shouldn't over 40 characters"),

  surname: check('surname')
    .trim()
    .notEmpty()
    .withMessage('Surname is missing')
    .isLength({ max: 10 })
    .withMessage("Full-name shouldn't over 40 characters"),

  email: check('email')
    .trim()
    .notEmpty()
    .withMessage('Email is missing')
    .isEmail()
    .withMessage('Not a valid Email'),

  password: check('password')
    .trim()
    .notEmpty()
    .withMessage('Password is missing')
    .isStrongPassword({
      minLength: 8,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage(
      'Length must be Eight. Use Uppercase, Number and Symbol for once',
    ),

  post: check('body')
    .trim()
    .notEmpty()
    .withMessage('Field must not be empty')
    .isLength({
      min: 10,
      max: 500,
    })
    .withMessage('Length have to at least 50 not more then 100 characters'),
};

const { fullName, email, password, surname, firstName, post } = validationRules;

const UserValidation = [firstName, surname, email, password];

const UserLoginValidation = [email, password];

const postValidation = [post];

module.exports = {
  UserValidation,
  UserLoginValidation,
  postValidation,
};
