const Product = require("../models/productModel");

// create
exports.createProduct = async (req, res) => {
  try {
    var data = req.body;
    if (req.file) {
      data.file = req.file.filename;
    }
    const producted = await new Product(data).save();
    res.send(producted);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

// List
exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

// Read
exports.getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id); // Find product by primary key (assuming 'id' is the primary key)

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// Update
exports.updateProductById = async (req, res) => {
  try {
    const id = req.params.id;

    const { name, price, description } = req.body;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.name = name;
    product.price = price;
    product.description = description;

    await product.save();

    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// Remove
exports.deleteProductById = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.destroy();

    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
