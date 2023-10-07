const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProduct,
  updateProductById,
  deleteProductById,
} = require("../controllers/productController");

router.post("/addProduct", createProduct);
router.get("/all", getAllProduct);
router.put("/:id", updateProductById);
router.delete("/:id", deleteProductById);

module.exports = router;
