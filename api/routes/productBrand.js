import express from "express";
import {
  getAllProductBrand,
  createProductBrand,
  getSingleProductBrand,
  deleteProductBrand,
  updateProductBrand,
  statusUpdate
} from "../controller/productBrandController.js";
import { productBrandMulter } from "../utils/multer.js";

// create router
const router = express.Router();

// routes
router.get("/brand", getAllProductBrand);
router.post("/brand", productBrandMulter, createProductBrand);
router.get("/brand/:id", getSingleProductBrand);
router.patch("/brand-status/:id", statusUpdate);
router.delete("/brand/:id", deleteProductBrand);
router.put("/brand/:id", updateProductBrand);
router.patch("/brand/:id", updateProductBrand);

export default router;
