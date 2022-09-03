import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

// Routes
import auth from "./routes/auth.js";
import hotels from "./routes/hotels.js";
import rooms from "./routes/rooms.js";
import users from "./routes/users.js";

const app = express();
dotenv.config();
const mongo_connection = process.env.MONGO_CONNECTION;
const port = process.env.PORT || 5000;

const connect = async () => {
  try {
    await mongoose.connect(mongo_connection);
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDb disconnected");
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/hotels", hotels);
app.use("/api/rooms", rooms);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(port, () => {
  connect();
  console.log("Connected to port " + port);
});
