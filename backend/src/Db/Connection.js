import mongoose from "mongoose";


// import { setDefaultResultOrder } from "dns";
// setDefaultResultOrder("ipv4first");

const connectDB = async () => {
    try{
      await  mongoose.connect(process.env.DB_URL)
        console.log(" ✅ Database connected successfully");

    } catch (error) {
        console.log(" ❌ Database is not connected",error)

    }
}
export default connectDB;