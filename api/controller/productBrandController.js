import Brand from "../models/Brand.js";

export const getAllProductBrand = async (req, res, next) => {
  try {
    const brands = await Brand.find();
    res.status(200).json({
      brands: brands,
      message: "All brands loaded succesfully"
    });
  } catch (error) {
    next(error);
  }
};

export const createProductBrand = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const brand = await Brand.create({
      name,
      slug,
      photo: req.file.filename
    });
    res.status(200).json({
      brands: brand,
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
