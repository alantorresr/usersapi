const mongoose = require('mongoose');
require('dotenv').config();

let UserConnectionString= `${process.env.MONGO_CONNECTION_STR}/Users`;

mongoose.connect(UserConnectionString,
    {
        autoIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(msg => console.log('Connected to Users')) 
    .catch(err => console.log('Error trying connect to Users: ', err));

module.exports = mongoose;