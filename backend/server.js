const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const multer = require('multer');
const sharp = require('sharp');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/landingdb';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error', err));

// Models
const Project = require('./models/Project');
const Client = require('./models/Client');
const Contact = require('./models/Contact');
const Subscription = require('./models/Subscription');

// Static uploads
const uploadsDir = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadsDir));

// Multer setup (store in memory for cropping)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
app.get('/api/projects', async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

app.post('/api/projects', upload.single('image'), async (req, res) => {
  try {
    const { name, description } = req.body;
    let imagePath = '';
    if (req.file) {
      const filename = `project-${Date.now()}.jpg`;
      const outPath = path.join(uploadsDir, filename);
      await sharp(req.file.buffer).resize(450, 350).jpeg().toFile(outPath);
      imagePath = `/uploads/${filename}`;
    }
    const p = new Project({ name, description, image: imagePath });
    await p.save();
    res.json(p);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add project' });
  }
});

app.get('/api/clients', async (req, res) => {
  const clients = await Client.find().sort({ createdAt: -1 });
  res.json(clients);
});

app.post('/api/clients', upload.single('image'), async (req, res) => {
  try {
    const { name, designation, description } = req.body;
    let imagePath = '';
    if (req.file) {
      const filename = `client-${Date.now()}.jpg`;
      const outPath = path.join(uploadsDir, filename);
      await sharp(req.file.buffer).resize(200, 200).jpeg().toFile(outPath);
      imagePath = `/uploads/${filename}`;
    }
    const c = new Client({ name, designation, description, image: imagePath });
    await c.save();
    res.json(c);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add client' });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;
    const c = new Contact({ fullName, email, mobile, city });
    await c.save();
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

app.get('/api/contact', async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
});

app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    const s = new Subscription({ email });
    await s.save();
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

app.get('/api/subscribe', async (req, res) => {
  const subs = await Subscription.find().sort({ createdAt: -1 });
  res.json(subs);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
