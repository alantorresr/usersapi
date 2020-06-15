const mongoose = require('mongoose');
require('dotenv').config();

let TeamConnectionString= `${process.env.MONGO_CONNECTION_STR}/Teams`;

mongoose.connect(TeamConnectionString,
    {
        autoIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(msg => console.log('Connected to Teams')) 
    .catch(err => console.log('Error trying connect to Teams: ', err));

module.exports = mongoose;