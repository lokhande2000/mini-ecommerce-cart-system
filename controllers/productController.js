const Product = require("../models/productModel");

const seedProducts = async () => {
  const products = [
    { productId: "P001", name: "Laptop", price: 1000, category: "Electronics" },
    { productId: "P002", name: "Phone", price: 500, category: "Electronics" },
    { productId: "P003", name: "T-Shirt", price: 20, category: "Fashion" },
  ];

  await Product.insertMany(products);
  console.log("Product catalog initialized.");
};

module.exports = { seedProducts };
