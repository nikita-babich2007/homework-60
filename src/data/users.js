const dbURI = process.env.MONGODB_URI || process.env.MONGO_URI;

await mongoose.connect(dbURI);