# Landing Page + Admin Panel (Assignment)

This repository contains a small full-stack implementation for a landing page and admin panel.

Structure:
- backend/: Node + Express API with Mongoose models
- frontend/: static HTML/CSS/JS for landing and admin pages

Run locally

1. Backend: install and run

```bash
cd backend
npm install
cp .env.example .env
# edit .env to point to your MongoDB (or use MongoDB Atlas)
npm run dev
```

2. Frontend: open `frontend/index.html` and `frontend/admin.html` in a browser (or serve with a static server). When developing locally, backend runs at `http://localhost:5000`.

Deployment

- Push this repository to GitHub/GitLab/Bitbucket (do not include company name in repo name or code)
- Deploy backend to Heroku / Render / any Node host. Set `MONGO_URI` in environment.
- Serve frontend as static site (Netlify, Vercel) or from the same server.

Notes

- Image uploads are stored in `backend/uploads` and cropped using `sharp`.
- API endpoints: `/api/projects`, `/api/clients`, `/api/contact`, `/api/subscribe`.
