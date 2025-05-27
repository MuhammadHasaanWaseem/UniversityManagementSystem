const express = require('express');
const router = express.Router();
const Module = require('../models/Module');

router.get('/', async (req, res) => {
    const modules = await Module.find().populate('department');
    res.json(modules);
});

router.post('/', async (req, res) => {
    await Module.create(req.body);
    res.send('Module added');
});

module.exports = router;
