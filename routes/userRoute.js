const express = require('express');
const passport = require('passport');

const router = express.Router();
const users = require('../controllers/userscontroller');



router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local'), users.login);

router.route('/signup')
    .get(users.renderSignup)
    .post(users.signup);

module.exports = router;