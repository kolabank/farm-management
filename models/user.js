const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    username: {
        type: String,
        required: true,
        unique: true

    }

})

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model('User', userSchema)

module.exports = User;