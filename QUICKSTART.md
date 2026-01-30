# Quick Start Guide

## Test Locally (RIGHT NOW)

### Step 1: Start MongoDB
Make sure MongoDB is running locally, or update `backend/.env` with MongoDB Atlas URI.

### Step 2: Start Backend
```bash
cd backend
npm run dev
```
Backend will run on http://localhost:5000

### Step 3: Open Frontend
Open in your browser:
- Landing page: `frontend/index.html`
- Admin panel: `frontend/admin.html`

## Test the Application

1. **Open Admin Panel** (`frontend/admin.html`)
   - Add a project with name, description, and image
   - Add a client with name, designation, description, and image
   - View existing contacts and subscriptions

2. **Open Landing Page** (`frontend/index.html`)
   - Fill out the hero consultation form
   - Scroll to see projects and clients you added
   - Subscribe to newsletter
   - Check admin panel to see your submissions

## Push to GitHub

```bash
# Create repo on GitHub (don't include assignment name)
# Then run:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## Deploy to Production

### Option 1: Deploy Backend to Render
1. Go to https://render.com
2. Create new "Web Service"
3. Connect your GitHub repo
4. Build command: `cd backend && npm install`
5. Start command: `cd backend && npm start`
6. Add environment variable: `MONGO_URI` = your MongoDB Atlas URI
7. Deploy!

### Option 2: Deploy Frontend to Netlify
1. Update API URLs in `frontend/js/main.js` and `frontend/js/admin.js`
   - Change `http://localhost:5000` to your Render backend URL
2. Drag `frontend/` folder to https://app.netlify.com/drop

### Option 3: All-in-One (Backend serves Frontend)
Add to `backend/server.js` before `app.listen()`:
```javascript
app.use(express.static(path.join(__dirname, '../frontend')));
```
Then deploy just the backend, and access frontend at the same URL.

## MongoDB Atlas Setup (Free)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Create database user
4. Whitelist IP: 0.0.0.0/0 (allow from anywhere)
5. Get connection string
6. Update `.env`: `MONGO_URI=mongodb+srv://...`

---

Everything is ready! The application fully implements the assignment requirements with the reference design.
