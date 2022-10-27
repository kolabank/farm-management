const Crops = require('../models/cropsmodel');

module.exports.allCrops = (req, res) => {


}

module.exports.newCrop = async(req, res) => {
    const newcrop = new Crops(req.body);
    await newcrop.save();

}