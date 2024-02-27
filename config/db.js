const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const dbName = "admin";

async function connectDB() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected to the MongoDB server");

  } finally {
    await client.close();
    console.log("Connection to MongoDB closed");
  }
}

module.exports = connectDB;
