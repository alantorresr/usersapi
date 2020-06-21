const { Schema, model } = require('mongoose');

const TeamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
});

module.exports = model('Teams', TeamSchema);