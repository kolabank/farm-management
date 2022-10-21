const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const schema = mongoose.Schema;

const UserSchema = new schema({
    username: {
        type: String,
        required: true,
        unique: true

    },

    farms: [{
        type: schema.Types.ObjectId,
        ref: 'Farm'
    }]

})

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema)

module.exports = User;