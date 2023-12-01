import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://karanjarwal999:KC2LEB3EytSjB99Y@cluster0.r8aqhrg.mongodb.net/';

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI)
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default dbConnect;