const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/landingdb';

const Project = require('./models/Project');
const Client = require('./models/Client');
const Contact = require('./models/Contact');
const Subscription = require('./models/Subscription');

// Clear all data from database
async function clearDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');

    // Clear all data
    await Project.deleteMany({});
    console.log('✅ Cleared all projects');

    await Client.deleteMany({});
    console.log('✅ Cleared all clients');

    await Contact.deleteMany({});
    console.log('✅ Cleared all contacts');

    await Subscription.deleteMany({});
    console.log('✅ Cleared all subscriptions');

    console.log('\n🗑️ Database cleared successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error clearing database:', error);
    process.exit(1);
  }
}

clearDatabase();
