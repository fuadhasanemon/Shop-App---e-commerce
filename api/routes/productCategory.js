import express from "express";
import {
  getAllProductCategory,
  createProductCategory,
  getSingleProductCategory,
  deleteProductCategory,
  updateProductCategory
} from "../controller/productCategoryController.js";
import { productCategoryMulter } from "../utils/multer.js";

// create router
const router = express.Router();

// routes
router.get("/category", getAllProductCategory);
router.post("/category", productCategoryMulter, createProductCategory);
router.get("/category/:slug", getSingleProductCategory);
router.delete("/category/:id", deleteProductCategory);
router.put("/category/:id", updateProductCategory);
router.patch("/category/:id", updateProductCategory);

export default router;
