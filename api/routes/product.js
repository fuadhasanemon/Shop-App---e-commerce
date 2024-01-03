import express from "express";
import { productMulter } from "../utils/multer.js";
import {
  createProducts,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct
} from "../controller/productController.js";

// create router
const router = express.Router();

// routes
router.route("/").get(getAllProducts).post(productMulter, createProducts);
router.get("/:slug", getSingleProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", productMulter, updateProduct);

export default router;
