const express = require("express");
const app = express();
const {
  getProduct,
  getSingleProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("./controller/productController");
const productRoute = require("./routes/productRoute");

const { connection } = require("./connection/connection");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("", productRoute);
connection;

app.listen(3000, (req, res) => {
  console.log("Server is running from 3000 Port!");
});
