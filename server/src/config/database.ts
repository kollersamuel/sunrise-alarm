import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase", {});
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
