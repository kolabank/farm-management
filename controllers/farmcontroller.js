// const { model } = require('mongoose');
const Farm = require('../models/farmmodel');
// const { findById } = require('../models/usermodel');
const User = require('../models/usermodel');

module.exports.renderDashboard = async(req, res) => {
    const user = await req.user.populate('farms');
    console.log(user);

    res.render('farm/farmdashboard', { user });

}

module.exports.newFarm = (req, res) => {
    res.render('farm/newfarm');
}

module.exports.createFarm = async(req, res) => {
    const newFarm = new Farm(req.body)
    await newFarm.save();
    farmUser = await User.findById(req.user._id).populate('farms');
    farmUser.farms.push(newFarm);
    await farmUser.save();
    // console.log(farmUser);
    console.log("Farm created");
    res.redirect('dashboard')
}