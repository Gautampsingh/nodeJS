const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('we are at users');
})

router.get('/specific', (req, res) => {
    res.send('User - Specific Post');
})

module.exports = router;