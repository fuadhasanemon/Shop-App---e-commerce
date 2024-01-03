import { createSlug } from "../helper/createSlug.js";
import Product from "../models/Product.js";
import { unlinkSync } from "fs";

export const getAllProducts = async (req, res, next) => {
  try {
    const data = await Product.find();
    res.status(200).json({
      products: data,
      message: "All data loaded succesfully"
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const data = await Product.findOne({ slug });
    res.status(200).json({
      product: data,
      message: "Single product loaded succesfully"
    });
  } catch (error) {
    next(error);
  }
};

export const createProducts = async (req, res, next) => {
  try {
    const {
      name,
      regular_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
      categories,
      tags,
      brands
    } = req.body;

    // get product photo
    const photo = req.files["product-photo"][0].filename;

    // get gallery photo
    const gallery = [];
    [...req.files["product-gallery-photo"]].forEach(item => {
      gallery.push(item.filename);
    });

    const data = await Product.create({
      name,
      slug: createSlug(name),
      regular_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
      photo,
      gallery,
      categories,
      tags,
      brands
    });
    res.status(200).json({
      products: data,
      message: "Product created succesfully"
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Product.findByIdAndDelete(id);

    // delete related files
    unlinkSync(`api/public/products/${data.photo}`);

    // delete gallery files
    data.gallery.forEach(item => {
      unlinkSync(`api/public/products/${item}`);
    });

    res.status(200).json(
      {
        product: data,
        message: "Deleted product succesfully"
      },
      {
        new: true
      }
    );
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      regular_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
      categories,
      tags,
      brands,
      photo
    } = req.body;
    const data = await Product.findByIdAndUpdate(id, {
      name,
      regular_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
      categories,
      tags,
      brands,
      photo
    });

    // delete related files
    unlinkSync(`api/public/products/${data.photo}`);

    // delete gallery files
    data.gallery.forEach(item => {
      unlinkSync(`api/public/products/${item}`);
    });

    res.status(200).json({
      product: data,
      message: "Product updated succesfully"
    });
  } catch (error) {
    next(error);
  }
};
