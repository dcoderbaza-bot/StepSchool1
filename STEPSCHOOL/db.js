import mongoose from 'mongoose';

export default async function connectDB() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error('MONGO_URI topilmadi. .env faylini yoki hosting env vars ni tekshiring.');
  }

  mongoose.set('strictQuery', true);

  const connection = await mongoose.connect(mongoUri, {
    serverSelectionTimeoutMS: 10000
  });

  console.log(`MongoDB connected: ${connection.connection.host}`);
}
