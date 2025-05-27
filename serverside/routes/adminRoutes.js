const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

router.get('/', async (req, res) => {
    const admins = await Admin.find();
    res.json(admins);
});

router.post('/', async (req, res) => {
    await Admin.create(req.body);
    res.send('Admin created');
});

module.exports = router;
