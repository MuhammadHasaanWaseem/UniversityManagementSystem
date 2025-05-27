const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: String,
    date: Date,
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    },
    description: String,
    relatedModule: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Module'
    }
});

module.exports = mongoose.model('Event', eventSchema);
