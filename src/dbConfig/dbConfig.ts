import { error } from "console";
import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB successfully connected");
    });

    connection.on("error", (error) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. ",
        error
      );
    });
  } catch (error: any) {
    console.log("Something went wrong while connecting to the database");
    console.log(error);
  }
}
