const {
  getProduct,
  postProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");

const express = require("express").Router();

express.route("/api/products/").get(getProduct).post(postProduct);
express
  .route("/api/products/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);
