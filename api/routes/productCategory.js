import express from "express";
import { getAllProductCategory } from "../controller/productCategoryController.js";

// create router
const router = express.Router();

// routes
router.get("/category", getAllProductCategory);

export default router;
