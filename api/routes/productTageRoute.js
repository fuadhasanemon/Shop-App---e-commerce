import express from "express";
import {
  createProductTags,
  deleteProductTags,
  getAllProductTags,
  updateProductTag
} from "../controller/productTagController.js";

// create router
const router = express.Router();

// routes
router.route("/tag").get(getAllProductTags).post(createProductTags);

router
  .route("/tag/:id")
  .delete(deleteProductTags)
  .put(updateProductTag)
  .patch(updateProductTag);

export default router;
