const readlineSync = require("readline-sync");
require('dotenv').config()
const db = require("./database");
const { seedProducts } = require("./controllers/productController");
const {
  addToCart,
  viewCart,
  removeFromCart,
  checkout,
} = require("./controllers/cartController");
const { listDiscounts } = require("./services/discountService");

(async () => {
  await seedProducts();

  while (true) {
    const command = readlineSync.question("Enter command: ");
    const [action, productId, quantity] = command.split(" ");

    switch (action) {
      case "add_to_cart":
        await addToCart(productId, parseInt(quantity, 10));
        break;
      case "view_cart":
        await viewCart();
        break;
      case "remove_from_cart":
        await removeFromCart(productId, parseInt(quantity, 10));
        break;
      case "list_discounts":
        listDiscounts();
        break;
      case "checkout":
        const currency = readlineSync.question(
          "Enter currency (USD/EUR/GBP): "
        );
        await checkout(currency);
        break;
      default:
        console.log("Invalid command.");
    }
  }
})();
