const express = require('express');
const { registerUser, loginUser } = require('../userContoller');
const { userRegisterValidate, userLoginValidate } = require('../utils/userValidation');
const routes = express.Router();



routes.post('/register',userRegisterValidate ,registerUser);

routes.post('/login',userLoginValidate,loginUser);

// routes.get('/users',  getUsers);


module.exports = routes;