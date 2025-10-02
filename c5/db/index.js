import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";


const connectDB = async()=>{
  try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`MongoDB connected!! DB Host: ${connectionInstance.connection.host}`);
  }
  catch(err){
    console.log("MONGODB Connection Error : ",err);
    process.exit(1);
  }
}

export default connectDB;