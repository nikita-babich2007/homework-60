import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI || process.env.MONGO_URI; 
    
    await mongoose.connect(dbURI);
    console.log('Успішно підключено до MongoDB через Mongoose!');
  } catch (error) {
    console.error('Помилка підключення до бази даних:', error.message);
    process.exit(1);
  }
};