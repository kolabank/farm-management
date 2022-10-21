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

    farmusers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const Farm = mongoose.model('Farm', FarmSchema);

module.exports = Farm;