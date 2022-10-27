const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FarmSchema = new Schema({
    farmname: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: String,

    longitude: Number,
    latitude: Number,

})

const Farm = mongoose.model('Farm', FarmSchema);

module.exports = Farm;