const express = require('express');
const router = express.Router();
require('dotenv').config();

const CoreTeam = require('../../core/core-teams');
const verifyToken = require('../../middlewares/jwtMiddleware');

router.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Teams'
    });
});

router.post('/new', async (req, res) => {
    let coreTeam = new CoreTeam();
    let result = await coreTeam.newTeam(req.body)
        .then(doc => {
            return { ok: true, message: doc.id }
        })
        .catch(err => {
            return { ok: false, message: err.message }
        });
    res.json(result);
});

router.put('/update/:idTeam', verifyToken, async (req, res) => {
    let id = req.params.idTeam;
    let coreTeam = new CoreTeam();
    let result = await coreTeam.updateTeam(id, req.body)
        .then(doc => {
            return { ok: true, message: doc.id };
        })
        .catch(err => {
            return { ok: false, message: err.message };
        });
    res.json(result);
});

router.post('/delete', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Delete team'
    });
});

router.post('/delete', verifyToken, async (req, res) => {
    let coreTeam = new CoreTeam();
    let result = await coreTeam.deleteTeam(req.body.id)
        .then(doc => {
            return { ok: true, message: doc.id };
        })
        .catch(err => {
            return { ok: false, message: err.message };
        });
    res.json(result);
});

router.post('/getbyid', verifyToken, async (req, res) => {
    let coreTeam = new CoreTeam();
    let result = await coreTeam.getTeamById(req.body.id).catch(err => { return {} });
    res.json({result});
});

module.exports = router;