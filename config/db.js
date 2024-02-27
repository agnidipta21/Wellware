const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // Replace with your MongoDB URI
const dbName = "admin"; // Replace with your database name

async function connectDB() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected to the MongoDB server");

    // Use the connected client for further operations if needed
    // e.g., client.db(dbName).collection('your_collection_name').find({}).toArray();
  } finally {
    await client.close();
    console.log("Connection to MongoDB closed");
  }
}

module.exports = connectDB;