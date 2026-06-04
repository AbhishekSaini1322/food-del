import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected");
    } catch (err) {
        console.error("DB connection failed:", err.message);
    }
};



// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.