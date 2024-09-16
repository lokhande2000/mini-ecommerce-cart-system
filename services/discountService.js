const applyDiscounts = async (cart) => {
  cart.items.forEach((item) => {
    if (item.category === "Fashion" && item.quantity >= 2) {
      console.log("Buy 1 Get 1 Free on Fashion applied.");
      cart.total -= item.price;
    } else if (item.category === "Electronics") {
      console.log("10% Off on Electronics applied.");
      cart.total -= item.price * 0.1;
    }
  });
  await cart.save();
};

const listDiscounts = () => {
  console.log("Available Discounts:");
  console.log("1. Buy 1 Get 1 Free on Fashion items");
  console.log("2. 10% Off on Electronics");
};

module.exports = { applyDiscounts, listDiscounts };
