const express = require('express');
const router = express.Router();

const CoreUser = require('../../core/core-users');

router.get('/test', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Users'
    });
});

router.post('/new', async (req, res) => {
    let coreUser = new CoreUser();
    let result = await coreUser.newUser(req.body)
        .then(doc => {
            let result = {};
            if(doc.id){
                result = { ok: true, message: doc.id };
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

router.put('/update/:idUser', async (req, res) => {
    let id = req.params.idUser;
    let coreUser = new CoreUser();
    let result = await coreUser.updateUser(id, req.body)
        .then(doc => {
            return {
                isCorrect: true,
                message: doc.id
            };
        })
        .catch(err => {
            return {
                isCorrect: false,
                message: err.message
            };
        });
    res.json(result);
});

router.post('/delete', async (req, res) => {
    let coreUser = new CoreUser();
    let result = await coreUser.deleteUser(req.body.id)
        .then(doc => {
            return {
                isCorrect: true,
                message: doc.id
            };
        })
        .catch(err => {
            return {
                isCorrect: false,
                message: err.message
            };
        });
    res.json(result);
});

router.post('/getbyid', async (req, res) => {
    let coreUser = new CoreUser();
    let result = await coreUser.getUserById(req.body.id).catch(err => { return {} });
    res.json({result});
});

module.exports = router;