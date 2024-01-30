import { createSlug } from "../helper/createSlug.js";
import Tag from "../models/Tag.js";

export const getAllProductTags = async (req, res, next) => {
  try {
    const data = await Tag.find();
    res.status(200).json({
      tags: data,
      message: "Tag loaded successfully"
    });
  } catch (error) {
    next(error);
  }
};

export const createProductTags = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await Tag.create({
      name,
      slug: createSlug(name)
    });
    res.status(200).json({
      tags: data,
      message: "Tag created successfully"
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProductTags = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Tag.findByIdAndDelete(id);
    res.status(200).json({
      message: "Tag deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

export const updateProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Tag.findByIdAndUpdate(
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
      data: data,
      message: "Tag updated successfully"
    });
  } catch (error) {
    next(error);
  }
};
