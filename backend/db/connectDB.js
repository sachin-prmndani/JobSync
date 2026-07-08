import mongoose from "mongoose"
import ENV from '../ENV.js';
const connectDB = async ()=>{
    try {
        const res = await mongoose.connect(ENV.MONGO_URL);
    } catch (err) {
        console.log("there was some error connecting DB");
        process.exit(1);
    }
}
export default connectDB;