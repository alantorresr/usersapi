const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Users'
    });
});

router.post('/new', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'New user'
    });
});

router.post('/update', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Update user'
    });
});

router.post('/delete', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Delete user'
    });
});

router.post('/getbyid', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Get team by id'
    });
});

module.exports = router;