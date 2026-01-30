const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/landingdb';

// Models
const Project = require('./models/Project');
const Client = require('./models/Client');

// Dummy Projects Data
const projects = [
  {
    name: 'Consultation',
    description: 'Design • Modern',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232.svg'
  },
  {
    name: 'Design',
    description: 'Design • Modern',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232-1.svg'
  },
  {
    name: 'Marketing & Design',
    description: 'Design • Modern',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232-2.svg'
  },
  {
    name: 'Consultation & Marketing',
    description: 'Design • Modern',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232-3.svg'
  },
  {
    name: 'Consultation',
    description: 'Design • Modern',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Rectangle.svg'
  }
];

// Dummy Clients Data
const clients = [
  {
    name: 'Barbara D. Smith',
    designation: 'CEO',
    description: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam, eget.',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 28.svg'
  },
  {
    name: 'John Mitchell',
    designation: 'Web Developer',
    description: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam, eget.',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 29.svg'
  },
  {
    name: 'Sarah Johnson',
    designation: 'Designer',
    description: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam, eget.',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 31.svg'
  },
  {
    name: 'Michael Chen',
    designation: 'Marketing Manager',
    description: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam, eget.',
    image: '/uploads/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 33.svg'
  },
  {
    name: 'Emily Davis',
    designation: 'Product Manager',
    description: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam, eget.',
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
