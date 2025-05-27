# Management System API

This is a RESTful API built with **Node.js**, **Express**, and **MongoDB** using **Mongoose**. It serves as a backend for managing university or organizational structures including departments, modules, events, admins, and users.

---

## Features

- RESTful CRUD APIs for:
  - Departments
  - Modules
  - Events
  - Admins
  - Users
- MongoDB database connection using Mongoose
- Automatic dummy data insertion on first run (if database is empty)
- Clean and modular folder structure

---

## Technologies Used

- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose (ODM)

---

## Directory Structure

management-system-api/
│
├── models/ # Mongoose schemas
│ ├── Admin.js
│ ├── Department.js
│ ├── Event.js
│ ├── Module.js
│ └── User.js
│
├── routes/ # Express route handlers
│ ├── adminRoutes.js
│ ├── departmentRoutes.js
│ ├── eventRoutes.js
│ ├── moduleRoutes.js
│ └── userRoutes.js
│
├── index.js # Main application file
├── package.json # NPM dependencies and scripts
└── README.md # Project documentation

yaml
Copy
Edit

---

## Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB setup

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/management-system-api.git
cd management-system-api
Install dependencies

bash
Copy
Edit
npm install
Configure MongoDB Connection

Open index.js and replace the MongoDB URI with your own:

js
Copy
Edit
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/managementsystem')
Replace <username> and <password> with your actual MongoDB credentials.

Tip: For production use, store this URI in an .env file and use dotenv.

Start the server

bash
Copy
Edit
npm start
The server will run at:
http://localhost:3000

Dummy Data
On first successful connection, the API will automatically insert sample data into the collections if they are empty.

Includes:

Departments: Computer Science, Software Engineering

Modules: Operating Systems, Databases

Admin: admin@example.com

Users: Ali (CS), Sara (SE)

Event: AI Conference

API Endpoints
All endpoints are prefixed by the resource type. Examples:

GET /departments

POST /users

PUT /events/:id

DELETE /admins/:id

Inspect the /routes directory for full route definitions.

License
This project is provided for educational and internal development purposes. You are free to modify and adapt it to your needs.

yaml
Copy
Edit

---

Let me know if you want a version with environment variable support (`.env` and `dotenv`) or a GitHub Action