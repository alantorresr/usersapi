const express = require('express');
const router = express.Router();

const swaggerUi = require('../node_modules/swagger-ui-express');

//Routes
router.use('/users', require('./users'))

//Docs
router.use(`/docs`, swaggerUi.serve, swaggerUi.setup(require(`./docs/swagger`)));

module.exports = router;