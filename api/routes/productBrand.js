import express from "express";
import {
  getAllProductBrand,
  createProductBrand,
  getSingleProductBrand
} from "../controller/productBrandController.js";
import { productBrandMulter } from "../utils/multer.js";

// create router
const router = express.Router();

// routes
router.get("/brand", getAllProductBrand);
router.post("/brand", productBrandMulter, createProductBrand);
router.get("/brand/:id", getSingleProductBrand);

export default router;
