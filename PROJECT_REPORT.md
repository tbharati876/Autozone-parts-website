# AUTOZONE – AUTO PARTS E-COMMERCE WEBSITE
## Project Report

Project Type: Front-End Web Development Project

Deployment Platform: Vercel

Source Code: https://github.com/tbharati876/Autozone-parts-website

Live Website: https://autozone-parts.vercel.app/

### 1. Project Overview

AutoZone is a frontend-based automobile spare parts e-commerce website developed using HTML, CSS, and JavaScript. The website provides an online platform where users can explore automotive products, view product details, add items to their cart, manage wishlists, and complete a simulated checkout process.

The project aims to provide a user-friendly shopping experience with a responsive design, organized product categories, interactive features, and browser-based data storage.

### 2. Project Objectives

- Develop a user-friendly online auto parts shopping website.
- Display automobile spare parts with pricing, ratings, brands, and descriptions.
- Implement shopping cart functionality.
- Provide wishlist functionality for saving products.
- Implement product search, category filtering, and sorting.
- Provide product details pages.
- Implement a demo checkout and order confirmation flow.
- Create user login and registration interfaces.
- Store application data locally using LocalStorage.
- Design a responsive interface for different screen sizes.

### 3. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and page content |
| CSS3 | Styling, layouts, animations, and responsive design |
| JavaScript | Application logic and interactive functionality |
| LocalStorage | Persistent browser-side data storage |
| SVG | Product illustrations |
| Font Awesome | Icons and visual elements |

### 4. Project Features

#### 4.1 Home Page
The home page provides an introduction to the website, featured products, product category sections, and navigation to other pages.

#### 4.2 Product Catalog
The website displays automobile spare parts with information including:
- Product name
- Brand
- Price
- Rating
- Stock availability
- Description
- Features
- Compatibility

The catalog contains 20 sample products across different automotive categories.

#### 4.3 Product Categories

The products are organized into the following categories:

- Engine Parts
- Brakes
- Tires
- Lighting
- Accessories

#### 4.4 Search, Filter and Sort

Users can search for products by name, brand, category, or description. They can filter products by category, brand, and price range, and sort the catalog by price, rating, or product name.

#### 4.5 Product Details

Users can open individual product details to view additional information, including compatibility, description, price, stock, and features.

#### 4.6 Shopping Cart

The shopping cart allows users to:
- Add products to the cart.
- Increase or decrease product quantities.
- Remove products.
- View subtotal.
- View shipping charges.
- View tax calculations.
- View the final total.

#### 4.7 Wishlist

Users can add products to their wishlist and remove them whenever required.

#### 4.8 Checkout

The checkout page provides a customer information form, shipping details, payment method selection, order summary, and simulated order placement.

The application generates an order ID and displays an order confirmation after successful submission.

#### 4.9 User Account

The account section provides demo login and registration functionality, a profile view, logout functionality, and order history.

#### 4.10 Contact and Newsletter

The website includes contact and newsletter forms with frontend submission feedback.

### 5. Sample Products

The website contains 20 sample products:

1. Premium Oil Filter
2. Ceramic Brake Pads
3. All-Season Car Tire
4. LED Headlight Bulbs
5. Car Battery
6. Engine Air Filter
7. Brake Rotor
8. Alloy Wheel
9. Car Floor Mats
10. Car Phone Mount
11. Spark Plug Set
12. Brake Fluid
13. LED Fog Lights
14. Car Seat Cover
15. Synthetic Engine Oil
16. Tire Pressure Monitor
17. Alternator
18. Car Cleaning Kit
19. Performance Brake Caliper
20. Heavy Duty Wiper Blades

### 6. System Architecture

The project follows a frontend-only architecture.

**Frontend:** HTML provides the website structure, CSS manages the design and responsiveness, and JavaScript handles application logic and user interactions.

**Storage:** LocalStorage is used to retain shopping cart items, wishlist items, user session information, and orders in the user's browser.

**Product Images:** Product illustrations are generated using SVG data within JavaScript, avoiding external image hosting dependencies for these illustrations.

### 7. Data Storage

The application uses browser LocalStorage with the following storage keys:

| Storage Key | Data Stored |
|---|---|
| `autozone_cart` | Cart items and quantities |
| `autozone_wishlist` | Wishlist product IDs |
| `autozone_user` | Current demo user information |
| `autozone_orders` | Placed demo orders |

This allows data to remain available after refreshing the browser, on the same browser and device.

### 8. Implementation Workflow

1. Designed the website structure using HTML.
2. Created the responsive layout and styling using CSS.
3. Defined the sample product catalog in JavaScript.
4. Implemented product rendering and product detail views.
5. Added search, filtering, and sorting.
6. Implemented cart management and price calculations.
7. Implemented wishlist functionality.
8. Developed the checkout form and order confirmation flow.
9. Added demo account authentication and order history.
10. Integrated LocalStorage for browser-side persistence.
11. Updated product illustrations to avoid broken external image links.
12. Tested the website's interactive features in the browser.

### 9. Testing

The following functionality is intended to be tested:

| Test Case | Expected Result |
|---|---|
| Open website | Home page loads |
| Browse products | Product catalog displays |
| Search product | Matching products appear |
| Filter by category | Relevant products appear |
| Sort by price | Products are sorted correctly |
| View product details | Product information is displayed |
| Add to cart | Product appears in cart |
| Update quantity | Quantity and totals update |
| Remove cart item | Item is removed |
| Add to wishlist | Product is saved to wishlist |
| Checkout | Customer form and order summary are displayed |
| Place order | Order confirmation and ID appear |
| Login/Register | Demo account session is created |
| View order history | Orders for the current demo user appear |
| Refresh browser | LocalStorage data persists |

### 10. Limitations

- The application is frontend-only.
- Product data is sample data and is not retrieved from a live inventory system.
- Authentication is simulated and is not secure real-world authentication.
- Payment processing is not integrated.
- Checkout does not create a real purchase.
- LocalStorage data is stored on the browser and device.
- Product images are illustrations, not actual product photographs.
- No backend API or database is currently connected.

### 11. Future Enhancements

The project can be enhanced with:

- Backend development using Java, Spring Boot, Node.js, or another backend framework.
- Database integration using MySQL or PostgreSQL.
- Secure authentication and password management.
- Real payment gateway integration.
- Real automotive product images.
- Vehicle-specific product compatibility search.
- Admin dashboard for inventory and order management.
- Real order tracking.
- Cloud deployment with backend API support.

### 12. Conclusion

The AutoZone Auto Parts E-Commerce Website demonstrates the development of an interactive online shopping application using HTML, CSS, and JavaScript. It includes a product catalog, product details, search and filtering, sorting, shopping cart, wishlist, checkout, user account interface, and order history.

The project helped develop practical skills in frontend development, DOM manipulation, event handling, data management, responsive design, and LocalStorage integration. It also provides a foundation for expanding the application into a full-stack automobile spare parts e-commerce platform.
