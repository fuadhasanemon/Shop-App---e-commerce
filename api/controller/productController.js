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
      del_gall
    } = req.body;

    // get edit product
    const product = await Product.findById(id);

    // product photo update
    let photo = product.photo;
    if (req.files["product-photo"]) {
      photo = req.files["product-photo"][0].filename;
      unlinkSync(`api/public/products/${product.photo}`);
    }

    if (del_gall) {
      del_gall.forEach(item => {
        unlinkSync(`api/public/products/${item}`);
      });
    }

    // product gallery photo update
    let gallery_old = product.gallery.filter(data => !del_gall.includes(data));
    let gallery_new = [];
    if (req.files["product-gallery-photo"]) {
      req.files["product-gallery-photo"].forEach(item => {
        gallery_new.push(item.filename);
      });
    }

    const final_gallery = gallery_old.concat(gallery_new);

    const data = await Product.updateOne(
      {
        name,
        slug: createSlug(name),
        regular_price,
        sale_price,
        stock,
        short_desc,
        long_desc,
        categories,
        tags,
        brands,
        photo,
        gallery: final_gallery
      },
      {
        new: true
      }
    );

    res.status(200).json({
      product: data,
      message: "Product updated succesfully"
    });
  } catch (error) {
    next(error);
  }
};
