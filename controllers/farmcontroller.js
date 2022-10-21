const { model } = require('mongoose');
const Farm = require('../models/farmmodel')
const User = require('../models/usermodel');

module.exports.renderDashboard = async(req, res) => {
    const user = req.user;
    res.render('farm/farmdashboard', { user });

}

module.exports.newFarm = (req, res) => {
    res.render('farm/newfarm');
}

module.exports.createFarm = async(req, res) => {
    const newFarm = new Farm(req.body)
    await newFarm.save();
    console.log("Farm created");
    res.redirect('dashboard')
}