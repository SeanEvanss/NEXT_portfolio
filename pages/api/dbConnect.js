import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    console.log("MONGODB_URI is not defined");
    throw new Error("MONGODB_URI is not defined");
}

const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
}

export default async function dbConnect() {
    try {
        const mongoDBConn= await mongoose.connect(MONGODB_URI, opts);
        console.log("Connected to MongoDB");
        return mongoDBConn;
    } catch (err) {
        console.log("Error connecting to MongoDB: ", err);
        throw new Error("Error connecting to MongoDB: ", err);
    }
}