import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3003;

import todoRouter from "./routes/todo.js";
import mongoose from "mongoose";

app.use(express.json());
app.use(cors());

app.use("/api/v1/todos", todoRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
