// Import mongoose to test MongoDB connection
const mongoose = require("mongoose");
// Load environment variables
require("dotenv").config();

// Get the MongoDB URI from the .env file
const uri = process.env.MONGO_URI;

if (!uri) {
  console.error("Error: MONGO_URI is not defined in the .env file");
  process.exit(1);
}

// Test connection function
const testMongoConnection = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connection successful");
    mongoose.connection.close(); // Close the connection after testing
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit with failure if connection fails
  }
};

// Run the test
testMongoConnection();
