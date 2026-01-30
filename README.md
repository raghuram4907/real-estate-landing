# Landing Page + Admin Panel (Full Stack Assignment)

A professional real estate landing page with admin panel, built with Node.js, Express, MongoDB, and vanilla JavaScript.

## Features Implemented

### Landing Page
- ✅ Hero section with consultation form
- ✅ "Not Your Average Realtor" section with team images
- ✅ Why Choose Us? (Services) section with icons
- ✅ Gallery section with project images
- ✅ About Us section
- ✅ Our Projects section (dynamic from backend)
- ✅ Happy Clients section (dynamic from backend)
- ✅ Newsletter subscription
- ✅ Fully responsive design
- ✅ Uses all provided assets (icons, images, shapes)

### Admin Panel
- ✅ Add new projects (with image upload & cropping)
- ✅ Add new clients/testimonials (with image upload & cropping)
- ✅ View all contact form submissions
- ✅ View all newsletter subscriptions

### Backend
- ✅ Express.js REST API
- ✅ MongoDB with Mongoose models
- ✅ Image upload with Multer
- ✅ Automatic image cropping with Sharp (450x350 for projects, 200x200 for clients)
- ✅ CORS enabled for cross-origin requests

## Project Structure

```
├── backend/
│   ├── models/          # Mongoose models (Project, Client, Contact, Subscription)
│   ├── uploads/         # Uploaded images & provided assets
│   ├── server.js        # Express server with API routes
│   ├── package.json     # Backend dependencies
│   └── .env             # Environment variables
│
└── frontend/
    ├── index.html       # Landing page
    ├── admin.html       # Admin panel
    ├── css/
    │   └── style.css    # Styles for both pages
    └── js/
        ├── main.js      # Landing page logic
        └── admin.js     # Admin panel logic
```

## Quick Start

### 1. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file (or use existing):
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/landingdb
```

For production, use MongoDB Atlas:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/landingdb?retryWrites=true&w=majority
```

Start the backend:
```bash
npm run dev    # Development with auto-reload
# or
npm start      # Production
```

**Seed the database with dummy data:**
```bash
npm run seed   # Populates 5 projects and 5 clients
```

### 2. Frontend Setup

Open the frontend pages in your browser:
- Landing page: `frontend/index.html`
- Admin panel: `frontend/admin.html`

Or serve with a static server:
```bash
# Using Python
python -m http.server 3000

# Using Node.js http-server
npx http-server frontend -p 3000
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| POST | `/api/projects` | Add new project (with image) |
| GET | `/api/clients` | Get all clients |
| POST | `/api/clients` | Add new client (with image) |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all contact submissions |
| POST | `/api/subscribe` | Subscribe to newsletter |
| GET | `/api/subscribe` | Get all subscriptions |

## Deployment

### Backend (Heroku)

```bash
# Login to Heroku
heroku login

# Create new app
heroku create your-app-name

# Set environment variables
heroku config:set MONGO_URI="your-mongodb-atlas-uri"

# Deploy
git push heroku main
```

### Backend (Render)

1. Create new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Set build command: `cd backend && npm install`
4. Set start command: `cd backend && npm start`
5. Add environment variable: `MONGO_URI`

### Frontend (Netlify/Vercel)

1. Update `frontend/js/main.js` and `frontend/js/admin.js`:
   - Change `http://localhost:5000/api` to your deployed backend URL
2. Deploy `frontend/` folder to Netlify or Vercel

Or serve frontend from the backend by adding to `server.js`:
```javascript
app.use(express.static(path.join(__dirname, '../frontend')));
```

## GitHub Setup

```bash
# Already initialized! Just add your remote:
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main
```

**Important**: Do NOT include company/assignment name in repo name or code.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Image Processing**: Multer (upload), Sharp (cropping)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Database**: MongoDB (local or Atlas)

## Design Reference

The landing page design matches the provided reference image with:
- Blue (#4A90E2) and Orange (#FF6B35) color scheme
- Professional layout with hero form
- Service cards with icons
- Dynamic project and client sections
- Newsletter subscription
- Responsive design for mobile/tablet

## Additional Features

✅ **Image Cropping**: All uploaded images are automatically cropped to optimal sizes (450x350 for projects, 200x200 for clients)

## Notes

- All assets from the provided folder are integrated into the design
- Frontend works standalone with placeholder data if backend is offline
- Backend API is RESTful and can be consumed by any frontend
- Ready for deployment to any cloud platform

---

**Developed**: January 2026
