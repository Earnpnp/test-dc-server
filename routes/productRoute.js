const express = require("express");
const router = express.Router();
const { authenticate } = require("../middlewares/authenticate");
const {
  createProduct,
  getAllProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/productController");
const upload = require("../middlewares/upload");

router.post("/product", authenticate, upload, createProduct);
router.get("/product", getAllProduct);
router.get("/product/:id", getProductById);
router.put("/product/:id", updateProductById);
router.delete("/product/:id", deleteProductById);

module.exports = router;
