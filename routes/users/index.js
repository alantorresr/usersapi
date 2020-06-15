const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const CoreUser = require('../../core/core-users');
const verifyToken = require('../../middlewares/jwtMiddleware');

router.get('/test', (req, res) => { //Not protected
    res.status(200).json({
        ok: true,
        message: 'Users'
    });
});

router.post('/new', async (req, res) => { //Not protected
    let coreUser = new CoreUser();
    let result = await coreUser.newUser(req.body)
        .then(doc => {
            let result = {};
            const token = jwt.sign({ id: doc.id }, process.env.SECRET, {
                expiresIn: 60 * 60 * 24 // Expires in 24 hours
            });
            if(doc.id){
                result = { ok: true, message: doc.id, token };
            } else {
                result = { ok: false, message: "This email already exist in the database." };
            }
            
            return result
        })
        .catch(err => {
            return {
                ok: false,
                message: err.message
            }
        });
    res.json(result);
});

router.put('/update/:idUser', verifyToken, async (req, res) => {
    let id = req.params.idUser;
    let coreUser = new CoreUser();
    let result = await coreUser.updateUser(id, req.body)
        .then(doc => {
            return {
                ok: true,
                ok: doc.id
            };
        })
        .catch(err => {
            return {
                ok: false,
                message: err.message
            };
        });
    res.json(result);
});

router.post('/delete', verifyToken, async (req, res) => {
    let coreUser = new CoreUser();
    let result = await coreUser.deleteUser(req.body.id)
        .then(doc => {
            return {
                ok: true,
                message: doc.id
            };
        })
        .catch(err => {
            return {
                ok: false,
                message: err.message
            };
        });
    res.json(result);
});

router.post('/getbyid', verifyToken, async (req, res) => {
    let coreUser = new CoreUser();
    let result = await coreUser.getUserById(req.body.id).catch(err => { return {} });
    res.json({result});
});

router.post('/login', async (req, res) => { //Not protected
    const { email, password } = req.body;
    let coreUser = new CoreUser();
    let result = await coreUser.login(email, password).catch(err => { return {} });
    const token = jwt.sign({ id: result.id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 // Expires in 24 hours
    });
    if(result.ok){
        result.token = token;
    }
    res.json(result);
});

module.exports = router;