import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const DB_URL = process.env.MONGO_URL.replace(
      "<PASSWORD>",
      process.env.DATABASE_PASSWORD
    );
    const conn = await mongoose.connect(DB_URL);
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MongoDB Erorr ${error}`.bgRed.white);
  }
};

export default connectDB;
