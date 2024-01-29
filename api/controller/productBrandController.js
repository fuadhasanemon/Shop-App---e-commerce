import { createSlug } from "../helper/createSlug.js";
import Brand from "../models/Brand.js";

export const getAllProductBrand = async (req, res, next) => {
  try {
    const brands = await Brand.find();
    res.status(200).json({
      brands,
      message: "All brands loaded succesfully"
    });
  } catch (error) {
    next(error);
  }
};

export const createProductBrand = async (req, res, next) => {
  try {
    const { name } = req.body;
    const brand = await Brand.create({
      name,
      slug: createSlug(name),
      photo: req.file.filename
    });
    res.status(200).json({
      brand,
      message: "Brand created succesfully"
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleProductBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleBrand = await Brand.findById(id);
    res.status(200).json({
      brands: singleBrand,
      message: "Single barand loaded succesfully"
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProductBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteBrand = await Brand.findByIdAndDelete(id);
    res.status(200).json({
      brands: deleteBrand,
      message: "Barand deleted succesfully"
    });
  } catch (error) {
    next(error);
  }
};

export const statusUpdate = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updateStatus = await Brand.findByIdAndUpdate(
      id,
      {
        status
      },
      {
        new: true
      }
    );
    res.status(200).json({
      brand: updateStatus,
      message: "Barand status updated succesfully"
    });
  } catch (error) {
    next(error);
  }
};

export const updateProductBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, photo } = req.body;
    const updateBrand = await Brand.findByIdAndUpdate(
      id,
      {
        name,
        slug: createSlug(name),
        photo: req.file?.filename ? req.file.filename : photo
      },
      {
        new: true
      }
    );
    res.status(200).json({
      brands: updateBrand,
      message: "Barand updated succesfully"
    });
  } catch (error) {
    next(error);
  }
};
