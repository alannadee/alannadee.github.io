import dotenv from "dotenv";
dotenv.config();

import express from "express";

import mongoose from "mongoose";
import path from "path";
// server.ts or app.ts


// Verify required environment variables
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in .env file");
  console.error("Please create a .env file in the backend directory with your MongoDB connection string");
  process.exit(1);
}

const app = express();

app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(4000, () => console.log("Server on http://localhost:4000"));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:");
    console.error(err);
    process.exit(1);
  });
