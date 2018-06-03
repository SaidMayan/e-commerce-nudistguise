const ar = require('express').Router();
const authController = require('../controllers/authController');

ar.get('/', authController.restrict, (req, res) => res.json({
    user: res.locals.data
  }));

ar.post('/register', authController.register);
ar.post('/login', authController.login);

module.exports = ar;
