import mongoose from "mongoose";
import config from "./config";
/**
 * Database configurations for Mongoose
 */
class DatabaseConnection {
  constructor() {
    const url = config.databaseurl;
    const options = {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 5000
    };

    mongoose.connect(url, options, function(error) {
      if (error) {
        console.error(`Error: ${error}`);
      }

      console.log(`Connected.`);
    });
  }
}

export default new DatabaseConnection();
