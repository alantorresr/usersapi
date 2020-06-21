const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const mongoose = require('../mongodb-connection');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
});

UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

UserSchema.methods.validatePassword = function(password) {
    return bcrypt.compare(password, this.password);
}

module.exports = model('Users', UserSchema);