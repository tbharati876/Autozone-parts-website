## Task Link:
https://www.freeinternships.in/web-development-internship/free-online-web-development-internship-auto-parts-accessories-wd-ec-006.php

## Deployed Link:
https://autozone-parts.vercel.app/

# Autozone Parts Website

A responsive automotive e-commerce website designed for browsing, searching, and purchasing automotive spare parts and accessories. This project provides a modern online shopping experience with product listings, filtering, cart management, wishlist, checkout, and user account functionality.

## Project Overview

The Autozone Parts Website is a front-end e-commerce application built to demonstrate the development of an interactive online automotive store. Users can explore automotive products, view product details, add products to their cart, manage their wishlist, and place demo orders.

## Features

- **Product Catalog** – Browse automotive parts and accessories across different categories.
- **Product Search** – Search for products by name, brand, or category.
- **Category Filtering** – Filter products by engine, brakes, tires, lighting, and accessories.
- **Brand Filtering** – Find products based on their brand.
- **Price Filtering** – Filter products by price range.
- **Product Sorting** – Sort by price, rating, or product name.
- **Product Details** – View descriptions, pricing, ratings, compatibility, stock, and features.
- **Shopping Cart** – Add products, update quantities, remove products, and view totals.
- **Wishlist** – Save favorite products for later.
- **Checkout** – Complete a demo checkout with customer and payment selection.
- **Order Confirmation** – View order confirmation and order details.
- **User Account** – Demo login, registration, logout, and order history.
- **Responsive Design** – Layout adapts to desktop, tablet, and mobile devices.
- **Persistent Storage** – Uses LocalStorage to maintain cart, wishlist, user session, and orders.
- **Product Illustrations** – Self-contained SVG product illustrations to avoid external image URL failures.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- SVG
- LocalStorage
- Font Awesome icons

## Project Structure

```text
Autozone-parts-website/
│
├── index.html      # Website structure and pages
├── style.css      # Styling, layouts, and responsive design
├── script.js      # Product data and application functionality
└── README.md      # Project documentation
```

## Product Categories

The website includes automotive products across the following categories:

| Category | Example Products |
|---|---|
| Engine | Oil filters, car batteries, air filters, spark plugs, alternators, engine oil |
| Brakes | Ceramic brake pads, brake rotors, brake fluid, performance calipers |
| Tires | All-season tires, alloy wheels, tire pressure monitors |
| Lighting | LED headlight bulbs, LED fog lights |
| Accessories | Floor mats, phone mounts, seat covers, cleaning kits, wiper blades |

## Functional Overview

### Shopping Cart
- Add products to cart
- Increase or decrease quantities
- Remove products
- Calculate subtotal, shipping, tax, and total

### Wishlist
- Add and remove favorite products
- Maintain wishlist across page refreshes

### Search, Filtering & Sorting
- Search products
- Filter by category, brand, and price
- Sort by price, rating, and name

### Checkout & Orders
- Enter customer information
- Select a demo payment method
- Place an order
- Generate an order confirmation
- View previous orders in the account section

### User Accounts
- Demo registration and login
- Logout
- Order history

## Installation and Usage

### 1. Clone the repository

```bash
git clone https://github.com/tbharati876/Autozone-parts-website.git
```

### 2. Navigate to the project folder

```bash
cd Autozone-parts-website
```

### 3. Run the application

Open `index.html` directly in your browser, or use the VS Code Live Server extension for local development.

## LocalStorage

The application stores demo data locally in the browser using the following keys:

| Storage Key | Purpose |
|---|---|
| `autozone_cart` | Shopping cart items |
| `autozone_wishlist` | Wishlist products |
| `autozone_user` | Demo user session |
| `autozone_orders` | Order history |

Data is stored in the browser and is not connected to a backend database.

## Limitations

- Authentication is frontend-only and intended for demonstration.
- Orders are simulated and not processed by a real server.
- Payment selection is a demo feature; no actual payments are processed.
- Data is stored locally in the browser using LocalStorage.
- Inventory updates are not synchronized between users.
- No backend API or database is currently integrated.

## Future Improvements

- Backend API integration
- Database integration for products, users, and orders
- Secure authentication and authorization
- Real payment gateway integration
- Admin dashboard and inventory management
- Order tracking
- Product reviews
- Improved product images using real automotive product photography

