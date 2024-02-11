import { createSlug } from "../helper/createSlug.js";
import Category from "../models/Category.js";

// Get all product categories
export const getAllProductCategory = async (req, res, next) => {
  try {
    const data = await Category.find();
    res.status(200).json({
      categories: data,
      message: "All data loaded successfully"
    });
  } catch (error) {
    next(error);
  }
};

// Get single product category
export const getSingleProductCategory = async (req, res, next) => {
  try {
    const slug = req.params;
    const data = await Category.findOne(slug);
    res.status(200).json({
      category: data,
      message: "Single category"
    });
  } catch (error) {
    next(error);
  }
};

export const createProductCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await Category.create({
      name,
      slug: createSlug(name),
      photo: req.file.filename
    });
    res.status(200).json({
      category: data,
      message: "Category added successfully"
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Category.findByIdAndDelete(id);
    res.status(200).json({
      message: "Category deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

export const updateProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Category.findByIdAndUpdate(
      id,
      {
        name,
        slug
      },
      {
        new: true
      }
    );
    res.status(200).json({
      category: data,
      message: "Category updated successfully"
    });
  } catch (error) {
    next(error);
  }
};
