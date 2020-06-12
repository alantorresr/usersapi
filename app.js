const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT;
const app = express();

//Server configuration
app.set("port", port || 5000);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: true, credentials: true}));

//Routes
app.use('/v1', require('./routes'));

//Start server
app.listen(app.get('port'), () => {
    // log.info(`server start on port ${app.get('port')}`);
    console.log(`Server start on port ${app.get('port')}`);
});