const User = require('../models/user');

module.exports.renderLogin = (req, res) => {
    res.render('users/login');

}

module.exports.login = (req, res) => {

    res.redirect('dashboard');

}

module.exports.renderSignup = (req, res) => {
    res.render('users/signup')
}

module.exports.signup = async(req, res) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email });
    const newUser = await User.register(user, password);
    res.redirect('login');
}