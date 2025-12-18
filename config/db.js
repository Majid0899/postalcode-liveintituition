import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const createConnection = async () => {
  const mongourl = process.env.MONGO_URL;

  try {

    await mongoose.connect(mongourl)
    console.log("Connected to Mongodb server");
    
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
    
  }
};

// add a event listener on disconnection
mongoose.connection.on("disconnected",()=>{
    console.log("Mongodb disconnected")
})

export {createConnection}