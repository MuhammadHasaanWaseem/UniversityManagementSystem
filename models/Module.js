const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
    name: String,
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    }
});

module.exports = mongoose.model('Module', moduleSchema);
