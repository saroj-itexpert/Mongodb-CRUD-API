const {
  getProduct,
  postProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
const express = require("express");
const router = express.Router();

router.route("/api/products/").get(getProduct).post(postProduct);
router
  .route("/api/products/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
