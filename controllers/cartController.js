const Cart = require("../models/cartModel");
const Product = require("../models/productModel");
const { applyDiscounts } = require('../services/discountService');
const { convertCurrency } = require('../services/currencyService');

const addToCart = async (productId, quantity) => {
  const product = await Product.findOne({ productId });
  if (!product) return console.log("Product not found");

  let cart = await Cart.findOne();
  if (!cart) {
    cart = new Cart({ items: [], total: 0, currency: "USD" });
  }

  const itemIndex = cart.items.findIndex(
    (item) => item.productId === productId
  );
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ ...product._doc, quantity });
  }

  cart.total += product.price * quantity;
  await cart.save();
  console.log("Product added to cart.");
};

const viewCart = async () => {
  const cart = await Cart.findOne();
  if (!cart || cart.items.length === 0) return console.log("Cart is empty.");

  console.log("Your Cart:");
  cart.items.forEach((item) => {
    console.log(
      `${item.name} - Quantity: ${item.quantity}, Price: ${
        item.price
      } USD, Total: ${(item.price * item.quantity).toFixed(2)} USD`
    );
  });
  console.log(`Total (before discounts): ${cart.total.toFixed(2)} USD`);
};

const removeFromCart = async (productId, quantity = 0) => {
  let cart = await Cart.findOne();
  if (!cart) return console.log("Cart is empty.");

  const itemIndex = cart.items.findIndex(
    (item) => item.productId === productId
  );
  if (itemIndex === -1) return console.log("Product not found in cart.");

  if (quantity > 0 && cart.items[itemIndex].quantity > quantity) {
    cart.items[itemIndex].quantity -= quantity;
    cart.total -= cart.items[itemIndex].price * quantity;
  } else {
    cart.total -= cart.items[itemIndex].price * cart.items[itemIndex].quantity;
    cart.items.splice(itemIndex, 1);
  }

  await cart.save();
  console.log("Product removed from cart.");
};

const checkout = async (currency = "USD") => {
  const cart = await Cart.findOne();
  if (!cart || cart.items.length === 0) return console.log("Cart is empty.");

  await applyDiscounts(cart);

  let finalTotal = cart.total;
  if (currency !== "USD") {
    finalTotal = convertCurrency(cart.total, currency);
    console.log(`Final Total in ${currency}: ${finalTotal}`);
  } else {
    console.log(`Final Total in USD: ${finalTotal}`);
  }
};

module.exports = { addToCart, viewCart, removeFromCart, checkout };
