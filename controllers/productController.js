const Product = require("../models/productModel");

exports.createProduct = async (req, res) => {
  try {
    const { name, description, type, price, quantity } = req.body;
    const product = await Product.create({
      name,
      description,
      type,
      price,
      quantity,
    });
    return res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ error: "Error creating product" });
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

exports.updateProductById = async (req, res) => {
  const productId = req.params.id;
  const { name, description, type, price, quantity, available } = req.body;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Update product attributes
    product.name = name;
    product.description = description;
    product.type = type;
    product.price = price;
    product.quantity = quantity;
    product.available = available;

    await product.save();

    return res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ error: "Error updating product" });
  }
};

exports.deleteProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    await product.destroy();

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({ error: "Error deleting product" });
  }
};
