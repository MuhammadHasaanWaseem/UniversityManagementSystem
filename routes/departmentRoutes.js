const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

router.get('/', async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (error) {
        console.error('Error fetching departments:', error);
        res.status(500).json({ error: 'Failed to fetch departments' });
    }
});

router.post('/', async (req, res) => {
    try {
        await Department.create(req.body);
        res.send('Department added');
    } catch (error) {
        console.error('Error adding department:', error);
        res.status(500).json({ error: 'Failed to add department' });
    }
});

module.exports = router;
