const express = require('express');

const router = express.Router();
const users = require('../controllers/users');
const passport = require('passport');


router.route('/login')
    .get(users.renderLogin)
    .post(users.login);


module.exports = router;