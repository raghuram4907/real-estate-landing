const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/landingdb';

const Project = require('./models/Project');
const Client = require('./models/Client');

const projects = [
  {
    name: 'Modern Residential Complex',
    description: 'Architecture • Luxury Development',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232.svg'
  },
  {
    name: 'Downtown Office Tower',
    description: 'Commercial • 50 Floors',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232-1.svg'
  },
  {
    name: 'Luxury Waterfront Villas',
    description: 'Premium Properties • Beachfront',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232-2.svg'
  },
  {
    name: 'Tech Park Innovation Hub',
    description: 'Commercial • Modern Design',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232-3.svg'
  },
  {
    name: 'Suburban Family Community',
    description: 'Residential • Family Homes',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Rectangle.svg'
  }
];

const clients = [
  {
    name: 'Sarah Mitchell',
    designation: 'CEO',
    description: 'Great service, very happy with the results.',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 28.svg'
  },
  {
    name: 'James Rodriguez',
    designation: 'Director',
    description: 'Excellent work. Would definitely recommend to others.',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 29.svg'
  },
  {
    name: 'Emily Thompson',
    designation: 'Architect',
    description: 'Very professional and helpful team. Great experience.',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 31.svg'
  },
  {
    name: 'Michael Chen',
    designation: 'VP Development',
    description: 'Delivered on time and within budget. Happy with everything.',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 33.svg'
  },
  {
    name: 'Jessica Williams',
    designation: 'Founder',
    description: 'Amazing team! Helped us achieve our goals and more.',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 35.svg'
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await Project.deleteMany({});
    await Client.deleteMany({});

    await Project.insertMany(projects);
    await Client.insertMany(clients);

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

seedDatabase();
