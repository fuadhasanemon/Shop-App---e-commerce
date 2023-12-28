import mongoose from "mongoose";

// create mongodb connection
const mongodbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDb connected succesfully`.bgBlue.black);
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

export default mongodbConnect;
