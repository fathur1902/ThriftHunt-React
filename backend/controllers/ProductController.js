import Product from "../models/ProductModels.js";
import fs from "fs";
import path from "path";

// CREATE Product
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, sizes, category } = req.body;
    if (!["S", "M", "L", "XL", "XXL"].includes(sizes)) {
      return res
        .status(400)
        .json({ error: "Invalid size. Allowed: S, M, L, XL, XXL" });
    }

    let image = null;
    if (req.files && req.files.image) {
      const file = req.files.image;
      const fileName = Date.now() + path.extname(file.name);
      const uploadPath = `uploads/${fileName}`;
      await file.mv(uploadPath);
      image = fileName;
    }

    const product = await Product.create({
      name,
      description,
      price,
      sizes,
      category,
      image,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ All Products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(
      products.map((product) => ({
        ...product.toJSON(),
        sizes: product.sizes ? product.sizes.split(", ") : null, // Ubah kembali ke array
      }))
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ Product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    const productWithArraySizes = {
      ...product.toJSON(),
      sizes: product.sizes ? product.sizes.split(", ") : null, // Ubah kembali ke array
    };

    res.json(productWithArraySizes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE Product
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    const { name, description, price, sizes, category } = req.body;
    if (!["S", "M", "L", "XL", "XXL"].includes(sizes)) {
      return res
        .status(400)
        .json({ error: "Invalid size. Allowed: S, M, L, XL, XXL" });
    }

    let image = product.image;
    if (req.files && req.files.image) {
      const file = req.files.image;
      const fileName = Date.now() + path.extname(file.name);
      const uploadPath = path.resolve(`uploads/${fileName}`);
      await file.mv(uploadPath);
      if (product.image) {
        const oldImagePath = path.resolve(`uploads/${product.image}`);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      image = fileName;
    }
    await product.update({
      name,
      description,
      price,
      sizes,
      category,
      image,
    });

    res.json({
      message: "Product updated successfully",
      product: product.toJSON(),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE Product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    if (product.image) {
      fs.unlinkSync(`uploads/${product.image}`);
    }
    await product.destroy();
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
