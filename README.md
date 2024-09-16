# mini-ecommerce-cart-system

A command-line-based mini e-commerce cart system where users can add products to their cart, remove products, view current items, apply discounts, convert currencies, and checkout.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Cart Commands](#cart-commands)
- [Discount System](#discount-system)
- [Currency Conversion](#currency-conversion)
- [Checkout Process](#checkout-process)
- [License](#license)

## Features

- Add, remove, and view items in the cart.
- Supports multiple quantities of the same item.
- Calculate total price, supporting multiple currencies.
- Apply available discounts dynamically.
- Modular design for adding new features easily.

## Tech Stack

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for Node.js to create the API.
- **MongoDB**: NoSQL database to manage product catalog and cart details.
- **Mongoose**: ODM for MongoDB and Node.js.
- **Readline-sync**: To provide command-line interaction with the user.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (locally or via a cloud service like MongoDB Atlas)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/lokhande2000/mini-ecommerce-cart-system.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up MongoDB:**
   Make sure MongoDB is running on your local machine or provide the connection string if you’re using MongoDB Atlas.

4. **Run the application:**
   ```bash
   node app.js
   ```

## Usage

Once the application is running, you can start interacting with the system by entering the following commands in the terminal.

### Cart Commands

- **Add items to the cart**:

  ```bash
  add_to_cart <product_id> <quantity>
  ```

  Example:

  ```bash
  add_to_cart P001 2
  ```

- **Remove items from the cart**:

  ```bash
  remove_from_cart <product_id> <quantity>
  ```

  Example:

  ```bash
  remove_from_cart P001 1
  ```

- **View items in the cart**:
  ```bash
  view_cart
  ```

### Discount System

- **List available discounts**:

  ```bash
  list_discounts
  ```

  Example:

  ```bash
  > list_discounts
  Available Discounts:
  1. Buy 1 Get 1 Free on Fashion items
  2. 10% Off on Electronics
  ```

### Currency Conversion

- **Convert total to different currencies**:
  After applying discounts, you can convert the total to another currency (EUR, GBP) during checkout.

### Checkout Process

- **Checkout and apply discounts**:

  ```bash
  checkout
  ```

  Example:

  ```bash
  > checkout
  Applying discounts...
  Buy 1 Get 1 Free on T-Shirt applied.
  Final Total in USD: 1020.00
  Would you like to view it in a different currency? (yes/no): yes
  Available Currencies: EUR, GBP
  Enter currency: EUR
  Final Total in EUR: 867.00
  ```

## Product Catalog

Here are the initial products pre-populated in the system:

1. **Product ID**: `P001`, **Name**: Laptop, **Price**: 1000.00 USD, **Category**: Electronics
2. **Product ID**: `P002`, **Name**: Phone, **Price**: 500.00 USD, **Category**: Electronics
3. **Product ID**: `P003`, **Name**: T-Shirt, **Price**: 20.00 USD, **Category**: Fashion

## Extensibility

The system is designed using Object-Oriented Programming principles, allowing for easy extension and modification. You can add:

- New product categories.
- Additional discounts.
- More currencies with different conversion rates.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
