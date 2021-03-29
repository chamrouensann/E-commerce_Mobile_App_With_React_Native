const mongoose = require("mongoose");

//9: Create Schema
const productSchema = mongoose.Schema({
  name: String,
  image: String,
  countInStock: {
    type: Number,
    required: true,
  },
});

//10: Create model
exports.Product = mongoose.model("Product", productSchema);
