const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/lisbon-chair-co';

const products = [
  {
    name: 'The Worker Bee',
    price: 750,
    category: 'work',
    image: 'chair-2.jpg',
    badge: 'Premium',
    rating: 5.0,
    features: ['Work', 'Comfortable for 8h', 'Vegan leather', 'Weighs 22 kg']
  },
  {
    name: 'The Chair 4/2',
    price: 1250,
    category: 'luxury',
    image: 'chair-3.jpg',
    badge: 'Luxury',
    rating: 4.8,
    features: ['Leisure and relaxing', 'Comfortable all day!', 'Organic cotton', 'Weighs 80 kg']
  },
  {
    name: 'The Executive Pro',
    price: 950,
    category: 'work',
    image: 'chair-3.jpg',
    badge: 'Ergonomic',
    rating: 4.9,
    features: ['Executive office', 'Lumbar support', 'Adjustable height', 'Weighs 25 kg']
  }
];

const importData = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected for seeding');

    await Product.deleteMany();
    console.log('Existing products removed');

    await Product.insertMany(products);
    console.log('Products seeded successfully');

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
