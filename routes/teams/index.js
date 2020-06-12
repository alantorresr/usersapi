const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Teams'
    });
});

router.post('/new', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'New team'
    });
});

router.post('/update', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Update team'
    });
});

router.post('/delete', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Delete team'
    });
});

router.post('/getbyid', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Get team by id'
    });
});

module.exports = router;