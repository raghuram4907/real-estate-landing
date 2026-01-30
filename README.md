# Landing Page with Admin Panel

A full-stack web application with a landing page and admin panel for managing projects, clients, contact forms, and newsletter subscriptions.

## Features

### Landing Page
- Hero section with contact form
- Team/About section with images
- Services section with icons
- Gallery/Projects showcase
- Client testimonials
- Newsletter subscription footer

### Admin Panel
- Add and manage projects
- Add and manage client testimonials
- View contact form submissions
- View newsletter subscribers
- Image upload with automatic cropping

### Backend
- Node.js/Express REST API
- MongoDB database
- Image upload and processing (multer, sharp)
- CORS enabled

## Project Structure

```
backend/
  ├── models/           (MongoDB schemas)
  ├── uploads/          (images and assets)
  ├── server.js         (main server)
  ├── seed.js          (populate dummy data)
  ├── clear.js         (clear database)
  └── package.json

frontend/
  ├── index.html       (landing page)
  ├── admin.html       (admin panel)
  ├── css/
  │   └── style.css
  └── js/
      ├── main.js      (landing page logic)
      └── admin.js     (admin panel logic)
```

## Setup & Run

### Install Dependencies
```bash
cd backend
npm install
```

### Start Server
```bash
npm run dev
```

Server runs on http://localhost:5000

### Load Data
```bash
npm run seed        # Add sample data
npm run clear       # Remove all data
```

### Access Application
- Landing page: http://localhost:5000/
- Admin panel: http://localhost:5000/admin.html

## API Endpoints

```
GET  /api/projects      - Get all projects
POST /api/projects      - Create project
GET  /api/clients       - Get all clients
POST /api/clients       - Create client
POST /api/contact       - Submit contact form
GET  /api/contact       - Get all contacts
POST /api/subscribe     - Subscribe to newsletter
GET  /api/subscribe     - Get all subscriptions
```

## Database

Default: MongoDB local instance at `mongodb://127.0.0.1:27017/landingdb`

Update `.env` to use MongoDB Atlas:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```

## Technologies

- Node.js, Express.js
- MongoDB, Mongoose
- Multer (file upload), Sharp (image processing)
- HTML5, CSS3, JavaScript

