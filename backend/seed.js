const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/landingdb';

const Project = require('./models/Project');
const Client = require('./models/Client');

// Sample data to populate database
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

// Dummy Clients Data
const clients = [
  {
    name: 'Sarah Mitchell',
    designation: 'CEO, Real Estate Ventures',
    description: 'Working with Real Trust transformed our property portfolio. Their strategic approach and attention to detail resulted in a 40% increase in property value within just 18 months.',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 28.svg'
  },
  {
    name: 'James Rodriguez',
    designation: 'Managing Director, Sterling Properties',
    description: 'Exceptional service from start to finish. The team understood our vision and delivered beyond expectations. We have already recommended them to multiple business partners.',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 29.svg'
  },
  {
    name: 'Emily Thompson',
    designation: 'Principal Architect',
    description: 'The design consultation was invaluable. They brought creative solutions that not only met our requirements but also enhanced the overall project aesthetics significantly.',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 31.svg'
  },
  {
    name: 'Michael Chen',
    designation: 'Vice President, Development',
    description: 'Their marketing strategies were instrumental in our project launch. We saw unprecedented interest and achieved full occupancy in record time. Highly professional team.',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 33.svg'
  },
  {
    name: 'Jessica Williams',
    designation: 'Founder, Urban Living Co.',
    description: 'I cannot speak highly enough about their consultation services. They identified opportunities we hadn\'t considered and helped us maximize our investment returns.'
,
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 35.svg'
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');

    // Clear existing data
    await Project.deleteMany({});
    await Client.deleteMany({});
    console.log('Cleared existing data');

    // Insert projects
    await Project.insertMany(projects);
    console.log(`✅ Inserted ${projects.length} projects`);

    // Insert clients
    await Client.insertMany(clients);
    console.log(`✅ Inserted ${clients.length} clients`);

    console.log('\n🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
