const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// MongoDB Models
const Department = require('./models/Department');
const Module = require('./models/Module');
const Event = require('./models/Event');
const Admin = require('./models/Admin');
const User = require('./models/User');

// Routes
app.use('/departments', require('./routes/departmentRoutes'));
app.use('/modules', require('./routes/moduleRoutes'));
app.use('/events', require('./routes/eventRoutes'));
app.use('/admins', require('./routes/adminRoutes'));
app.use('/users', require('./routes/userRoutes'));

// Connect to MongoDB Atlas and insert dummy data if not present
mongoose.connect('mongodb+srv://dbuser:WX2vgF3UQXTq4MLP@cluster0.d7t0c.mongodb.net/managementsystem?retryWrites=true&w=majority')
    .then(async () => {
        console.log('MongoDB connected');

        const hasDepartments = await Department.findOne();

        if (!hasDepartments) {
            console.log('Inserting dummy data...');

            // Clear previous data
            await Department.deleteMany({});
            await Module.deleteMany({});
            await Event.deleteMany({});
            await Admin.deleteMany({});
            await User.deleteMany({});

            // Dummy departments
            const cs = await Department.create({ name: 'Computer Science' });
            const se = await Department.create({ name: 'Software Engineering' });

            // Dummy modules
            const os = await Module.create({ name: 'Operating Systems', department: cs._id });
            const db = await Module.create({ name: 'Databases', department: se._id });

            // Dummy admin
            await Admin.create({ name: 'Admin User', email: 'admin@example.com' });

            // Dummy users
            await User.create([
                { name: 'Ali', email: 'ali@cs.com', role: 'student', department: cs._id },
                { name: 'Sara', email: 'sara@se.com', role: 'student', department: se._id }
            ]);

            // Dummy event
            await Event.create({
                title: 'AI Conference',
                date: new Date(),
                department: cs._id,
                description: 'An event on Artificial Intelligence.',
                relatedModule: os._id
            });

            console.log('Dummy data inserted.');
        } else {
            console.log('Dummy data already exists. Skipping.');
        }
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
