const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.get('/', async (req, res) => {
    const events = await Event.find().populate('department').populate('relatedModule');
    res.json(events);
});

router.post('/', async (req, res) => {
    await Event.create(req.body);
    res.send('Event created');
});

module.exports = router;
