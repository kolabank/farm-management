const User = require('../models/user');

module.exports.renderLogin = (req, res) => {
    res.render('users/login');

}

module.exports.login = (req, res) => {
    res.send(req.body);

}