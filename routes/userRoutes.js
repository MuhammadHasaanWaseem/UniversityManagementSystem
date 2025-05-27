const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    const users = await User.find().populate('department');
    res.json(users);
});

router.post('/', async (req, res) => {
    await User.create(req.body);
    res.send('User created');
});

module.exports = router;
