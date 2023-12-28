import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import productCategoryRoute from "./routes/productCategory.js";
import mongodbConnect from "./config/db.js";

// init express
const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// set static
app.use(express.static("api/public"));

// routes
app.use("/api/v1/product", productCategoryRoute);

// Environvent variable
const PORT = process.env.PORT || 9090;

// listen server
app.listen(PORT, () => {
  mongodbConnect();
  console.log(`Server is runing on ${PORT}`.bgGreen.white);
});
