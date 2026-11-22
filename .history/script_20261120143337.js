/* =========================================================
   AutoZone - Auto Parts & Accessories
   Frontend-only E-commerce Website
   ========================================================= */

// -------------------------
// 1. PRODUCT DATA
// -------------------------

const products = [
  {
    id: 1,
    name: "Premium Oil Filter",
    brand: "Bosch",
    category: "engine",
    price: 12.99,
    rating: 4.8,
    compatibility: "Most vehicles",
    description: "Premium oil filter engineered to help protect your engine from contaminants and maintain smooth performance.",
    image: "https://images.unsplash.com/photo-1635785852483-9e6c2f7d2a25?auto=format&fit=crop&w=700&q=80",
    stock: 25,
    features: ["Advanced filtration", "Durable construction", "Easy installation"]
  },
  {
    id: 2,
    name: "Ceramic Brake Pads",
    brand: "Akebono",
    category: "brakes",
    price: 89.99,
    rating: 4.9,
    compatibility: "Sedan, SUV",
    description: "High-performance ceramic brake pads designed for quiet braking, reduced dust, and dependable stopping power.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80",
    stock: 18,
    features: ["Quiet performance", "Low dust", "Reliable stopping"]
  },
  {
    id: 3,
    name: "All-Season Car Tire",
    brand: "Michelin",
    category: "tires",
    price: 149.99,
    rating: 4.7,
    compatibility: "Multiple sizes available",
    description: "All-season tire providing balanced grip, comfort, and performance for everyday driving.",
    image: "https://images.unsplash.com/photo-1559310053-3d8f9a5a6b7c?auto=format&fit=crop&w=700&q=80",
    stock: 12,
    features: ["All-season traction", "Comfortable ride", "Durable tread"]
  },
  {
    id: 4,
    name: "LED Headlight Bulbs",
    brand: "Philips",
    category: "lighting",
    price: 45.99,
    rating: 4.6,
    compatibility: "Universal fit",
    description: "Bright LED headlight bulbs designed to improve nighttime visibility.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    stock: 30,
    features: ["Bright illumination", "Energy efficient", "Long lifespan"]
  },
  {
    id: 5,
    name: "Car Battery",
    brand: "Optima",
    category: "engine",
    price: 179.99,
    rating: 4.8,
    compatibility: "Multiple vehicle types",
    description: "Reliable car battery built to provide consistent starting power.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf2c419?auto=format&fit=crop&w=700&q=80",
    stock: 15,
    features: ["Reliable starting", "Long lasting", "Vibration resistant"]
  },
  {
    id: 6,
    name: "Engine Air Filter",
    brand: "K&N",
    category: "engine",
    price: 29.99,
    rating: 4.5,
    compatibility: "Multiple vehicle types",
    description: "Engine air filter designed to help maintain clean airflow and engine performance.",
    image: "https://images.unsplash.com/photo-1635335898896-9f1c4d2a3f5b?auto=format&fit=crop&w=700&q=80",
    stock: 20,
    features: ["Improved airflow", "Reusable options", "Easy replacement"]
  },
  {
    id: 7,
    name: "Brake Rotor",
    brand: "Brembo",
    category: "brakes",
    price: 119.99,
    rating: 4.7,
    compatibility: "Selected vehicles",
    description: "Durable brake rotor designed for consistent braking performance.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80",
    stock: 14,
    features: ["Consistent braking", "Heat resistance", "Durable design"]
  },
  {
    id: 8,
    name: "Alloy Wheel",
    brand: "Enkei",
    category: "tires",
    price: 219.99,
    rating: 4.6,
    compatibility: "Multiple sizes available",
    description: "Stylish and lightweight alloy wheel designed for durability and performance.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    stock: 10,
    features: ["Lightweight design", "Stylish finish", "Durable construction"]
  },
  {
    id: 9,
    name: "Car Floor Mats",
    brand: "WeatherTech",
    category: "accessories",
    price: 59.99,
    rating: 4.8,
    compatibility: "Most vehicles",
    description: "All-weather floor mats designed to protect your vehicle interior.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    stock: 22,
    features: ["All-weather protection", "Easy cleaning", "Custom fit options"]
  },
  {
    id: 10,
    name: "Car Phone Mount",
    brand: "Scosche",
    category: "accessories",
    price: 24.99,
    rating: 4.4,
    compatibility: "Universal",
    description: "Convenient phone mount for hands-free navigation while driving.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80",
    stock: 35,
    features: ["Secure mounting", "Easy installation", "Adjustable viewing"]
  },
  {
    id: 11,
    name: "Spark Plug Set",
    brand: "NGK",
    category: "engine",
    price: 39.99,
    rating: 4.7,
    compatibility: "Selected vehicles",
    description: "Spark plugs designed to support reliable ignition and engine performance.",
    image: "https://images.unsplash.com/photo-1635335898896-9f1c4d2a3f5b?auto=format&fit=crop&w=700&q=80",
    stock: 28,
    features: ["Reliable ignition", "Efficient performance", "Durable construction"]
  },
  {
    id: 12,
    name: "Brake Fluid",
    brand: "Castrol",
    category: "brakes",
    price: 18.99,
    rating: 4.5,
    compatibility: "DOT specifications vary",
    description: "Brake fluid designed to support dependable hydraulic braking performance.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80",
    stock: 40,
    features: ["Reliable braking", "High temperature stability", "Quality formulation"]
  },
  {
    id: 13,
    name: "LED Fog Lights",
    brand: "Hella",
    category: "lighting",
    price: 69.99,
    rating: 4.6,
    compatibility: "Selected vehicles",
    description: "LED fog lights designed to improve visibility in poor weather conditions.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    stock: 16,
    features: ["Fog visibility", "LED technology", "Durable housing"]
  },
  {
    id: 14,
    name: "Car Seat Cover",
    brand: "Covercraft",
    category: "accessories",
    price: 79.99,
    rating: 4.5,
    compatibility: "Universal fit",
    description: "Seat covers designed to protect vehicle seats from wear and spills.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    stock: 13,
    features: ["Seat protection", "Comfortable material", "Easy installation"]
  },
  {
    id: 15,
    name: "Synthetic Engine Oil",
    brand: "Mobil 1",
    category: "engine",
    price: 34.99,
    rating: 4.8,
    compatibility: "Check vehicle oil specifications",
    description: "Synthetic motor oil engineered to help protect engine components.",
    image: "https://images.unsplash.com/photo-1635785852483-9e6c2f7d2a25?auto=format&fit=crop&w=700&q=80",
    stock: 45,
    features: ["Engine protection", "Temperature stability", "Reduced friction"]
  },
  {
    id: 16,
    name: "Tire Pressure Monitor",
    brand: "Schrader",
    category: "tires",
    price: 54.99,
    rating: 4.6,
    compatibility: "Selected vehicles",
    description: "Tire pressure monitoring component designed to help track tire pressure.",
    image: "https://images.unsplash.com/photo-1559310053-3d8f9a5a6b7c?auto=format&fit=crop&w=700&q=80",
    stock: 19,
    features: ["Pressure monitoring", "Reliable readings", "Vehicle safety"]
  },
  {
    id: 17,
    name: "Alternator",
    brand: "Denso",
    category: "engine",
    price: 249.99,
    rating: 4.7,
    compatibility: "Selected vehicles",
    description: "Alternator designed to support vehicle electrical power and battery charging.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf2c419?auto=format&fit=crop&w=700&q=80",
    stock: 8,
    features: ["Reliable charging", "Durable design", "Electrical performance"]
  },
  {
    id: 18,
    name: "Car Cleaning Kit",
    brand: "Meguiar's",
    category: "accessories",
    price: 42.99,
    rating: 4.6,
    compatibility: "Universal",
    description: "Car cleaning kit containing essentials to help maintain your vehicle's exterior.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    stock: 24,
    features: ["Vehicle cleaning", "Convenient kit", "Easy to use"]
  },
  {
    id: 19,
    name: "Performance Brake Caliper",
    brand: "Wilwood",
    category: "brakes",
    price: 329.99,
    rating: 4.8,
    compatibility: "Selected vehicles",
    description: "Performance brake caliper designed for dependable braking and improved control.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80",
    stock: 7,
    features: ["Performance braking", "Durable construction", "Improved control"]
  },
  {
    id: 20,
    name: "Heavy Duty Wiper Blades",
    brand: "Rain-X",
    category: "accessories",
    price: 21.99,
    rating: 4.5,
    compatibility: "Multiple sizes available",
    description: "Heavy-duty wiper blades designed to provide clear windshield visibility during rain.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    stock: 32,
    features: ["Clear visibility", "Weather resistant", "Easy replacement"]
  }
];

// -------------------------
// 2. STORAGE & APP STATE
// -------------------------

const STORAGE_KEYS = {
  cart: "autozone_cart",
  wishlist: "autozone_wishlist",
  user: "autozone_user",
  orders: "autozone_orders"
};

function loadStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Unable to save to localStorage:", error);
  }
}

let cart = loadStorage(STORAGE_KEYS.cart, []);
let wishlist = loadStorage(STORAGE_KEYS.wishlist, []);
let currentUser = loadStorage(STORAGE_KEYS.user, null);
let orders = loadStorage(STORAGE_KEYS.orders, []);
let currentProduct = null;

// -------------------------
// 3. HELPER FUNCTIONS
// -------------------------

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function money(amount) {
  return `$${Number(amount || 0).toFixed(2)}`;
}

function getProduct(id) {
  return products.find((product) => product.id === Number(id));
}

function saveCart() {
  saveStorage(STORAGE_KEYS.cart, cart);
}

function saveWishlist() {
  saveStorage(STORAGE_KEYS.wishlist, wishlist);
}

function saveOrders() {
  saveStorage(STORAGE_KEYS.orders, orders);
}

function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const cartCount = $("#cart-count");

  if (cartCount) {
    cartCount.textContent = count;
  }
}

function updateWishlistCount() {
  const count = wishlist.length;
  const wishlistCount = $("#wishlist-count");

  if (wishlistCount) {
    wishlistCount.textContent = count;
  }
}

function showMessage(message) {
  let toast = $("#toast-message");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-message";
    toast.className = "toast-message";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showMessage.timer);
  showMessage.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function navigateTo(sectionId) {
  const target = document.getElementById(sectionId);

  if (!target) {
    showMessage("Section not found");
    return;
  }

  $$(".page-section").forEach((section) => {
    section.classList.remove("active");
  });

  target.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (sectionId === "cart") {
    renderCart();
  }

  if (sectionId === "wishlist") {
    renderWishlist();
  }

  if (sectionId === "checkout") {
    renderCheckoutSummary();
  }

  if (sectionId === "account") {
    renderAccount();
  }
}

// -------------------------
// 4. PRODUCT DISPLAY
// -------------------------

function renderProducts(productList = products) {
  const productGrid = $("#product-grid");
  const noProducts = $("#no-products");

  if (!productGrid) return;

  if (!productList.length) {
    productGrid.innerHTML = "";
    if (noProducts) noProducts.style.display = "block";
    return;
  }

  if (noProducts) noProducts.style.display = "none";

  productGrid.innerHTML = productList.map((product) => {
    const isWishlisted = wishlist.includes(product.id);

    return `
      <article class="product-card">
        <div class="product-image-container">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <button class="wishlist-button ${isWishlisted ? "active" : ""}"
                  onclick="toggleWishlist(${product.id})"
                  aria-label="Toggle wishlist">
            <i class="fa ${isWishlisted ? "fa-heart" : "fa-heart-o"}"></i>
          </button>
        </div>
        <div class="product-card-content">
          <p class="product-brand">${product.brand}</p>
          <h3>${product.name}</h3>
          <div class="product-rating">
            <span>★ ${product.rating}</span>
          </div>
          <p class="product-price">${money(product.price)}</p>
          <p class="product-stock">${product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
          <div class="product-card-actions">
            <button class="btn btn-outline" onclick="viewProduct(${product.id})">Details</button>
            <button class="btn btn-primary" onclick="addToCart(${product.id})" ${product.stock <= 0 ? "disabled" : ""}>
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function viewProduct(id) {
  const product = getProduct(id);

  if (!product) {
    showMessage("Product not found");
    return;
  }

  currentProduct = product;

  const detailSection = $("#product-detail");
  if (!detailSection) return;

  const isWishlisted = wishlist.includes(product.id);

  detailSection.innerHTML = `
    <div class="product-detail-container">
      <div class="product-detail-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-detail-info">
        <p class="product-brand">${product.brand}</p>
        <h2>${product.name}</h2>
        <div class="product-rating">★ ${product.rating}</div>
        <p class="product-detail-price">${money(product.price)}</p>
        <p>${product.description}</p>
        <p><strong>Compatibility:</strong> ${product.compatibility}</p>
        <p><strong>Stock:</strong> ${product.stock}</p>
        <ul class="product-features">
          ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
        <button class="btn btn-primary" onclick="addToCart(${product.id})" ${product.stock <= 0 ? "disabled" : ""}>
          Add to Cart
        </button>
        <button class="btn btn-outline" onclick="toggleWishlist(${product.id})">
          ${isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
        <button class="btn btn-outline" onclick="navigateTo('products')">Back to Products</button>
      </div>
    </div>
  `;

  navigateTo("product-detail-page");
}

// -------------------------
// 5. SEARCH, FILTER & SORT
// -------------------------

function applyFilters() {
  const searchInput = $("#product-search");
  const categoryFilter = $("#category-filter");
  const brandFilter = $("#brand-filter");
  const priceFilter = $("#price-filter");

  const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const selectedCategory = categoryFilter ? categoryFilter.value : "all";
  const selectedBrand = brandFilter ? brandFilter.value : "all";
  const selectedPrice = priceFilter ? priceFilter.value : "all";

  let filteredProducts = [...products];

  if (searchTerm) {
    filteredProducts = filteredProducts.filter((product) => {
      const searchableText = [
        product.name,
        product.brand,
        product.category,
        product.description,
        product.compatibility
      ].join(" ").toLowerCase();

      return searchableText.includes(searchTerm);
    });
  }

  if (selectedCategory !== "all") {
    if (selectedCategory === "brakes-tires") {
      filteredProducts = filteredProducts.filter((product) =>
        ["brakes", "tires"].includes(product.category)
      );
    } else {
      filteredProducts = filteredProducts.filter((product) =>
        product.category === selectedCategory
      );
    }
  }

  if (selectedBrand !== "all") {
    filteredProducts = filteredProducts.filter((product) =>
      product.brand === selectedBrand
    );
  }

  if (selectedPrice !== "all") {
    const [min, max] = selectedPrice.split("-").map(Number);

    filteredProducts = filteredProducts.filter((product) => {
      if (selectedPrice === "1000+") return product.price >= 1000;
      return product.price >= min && product.price <= max;
    });
  }

  renderProducts(filteredProducts);
}

function setupFilters() {
  const searchInput = $("#product-search");
  const searchButton = $("#search-btn");
  const categoryFilter = $("#category-filter");
  const brandFilter = $("#brand-filter");
  const priceFilter = $("#price-filter");

  if (searchButton) {
    searchButton.addEventListener("click", applyFilters);
  }

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        applyFilters();
      }
    });
  }

  [categoryFilter, brandFilter, priceFilter].forEach((filter) => {
    if (filter) filter.addEventListener("change", applyFilters);
  });
}

// -------------------------
// 6. CART FUNCTIONALITY
// -------------------------

function addToCart(id) {
  const product = getProduct(id);

  if (!product) {
    showMessage("Product not found");
    return;
  }

  if (product.stock <= 0) {
    showMessage("This product is out of stock");
    return;
  }

  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    if (existingItem.quantity >= product.stock) {
      showMessage("Maximum available stock reached");
      return;
    }

    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      quantity: 1
    });
  }

  saveCart();
  updateCartCount();
  showMessage(`${product.name} added to cart`);

  navigateTo("cart");
}

function changeQuantity(id, amount) {
  const item = cart.find((cartItem) => cartItem.id === Number(id));
  const product = getProduct(id);

  if (!item || !product) return;

  const newQuantity = item.quantity + amount;

  if (newQuantity <= 0) {
    removeFromCart(id);
    return;
  }

  if (newQuantity > product.stock) {
    showMessage("Maximum available stock reached");
    return;
  }

  item.quantity = newQuantity;
  saveCart();
  updateCartCount();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== Number(id));
  saveCart();
  updateCartCount();
  renderCart();
  showMessage("Item removed from cart");
}

function getCartTotals() {
  const subtotal = cart.reduce((total, item) => {
    const product = getProduct(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  const shipping = subtotal === 0 || subtotal >= 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return { subtotal, shipping, tax, total };
}

function renderCart() {
  const cartContainer = $("#cart-items");
  const emptyCart = $("#empty-cart");
  const cartSummary = $("#cart-summary");

  if (!cartContainer) return;

  if (!cart.length) {
    cartContainer.innerHTML = "";
    if (emptyCart) emptyCart.style.display = "block";
    if (cartSummary) cartSummary.style.display = "none";
    return;
  }

  if (emptyCart) emptyCart.style.display = "none";
  if (cartSummary) cartSummary.style.display = "block";

  cartContainer.innerHTML = cart.map((item) => {
    const product = getProduct(item.id);

    if (!product) return "";

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div class="cart-item-info">
          <h3>${product.name}</h3>
          <p>${product.brand}</p>
          <p class="cart-item-price">${money(product.price)}</p>
        </div>
        <div class="cart-quantity-controls">
          <button onclick="changeQuantity(${product.id}, -1)" aria-label="Decrease quantity">−</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity(${product.id}, 1)" aria-label="Increase quantity">+</button>
        </div>
        <button class="remove-item-button" onclick="removeFromCart(${product.id})">Remove</button>
      </div>
    `;
  }).join("");

  const totals = getCartTotals();

  setText("#cart-subtotal", money(totals.subtotal));
  setText("#cart-shipping", totals.shipping === 0 ? "Free" : money(totals.shipping));
  setText("#cart-tax", money(totals.tax));
  setText("#cart-total", money(totals.total));
}

function setText(selector, value) {
  const element = $(selector);
  if (element) element.textContent = value;
}

// -------------------------
// 7. WISHLIST
// -------------------------

function toggleWishlist(id) {
  const product = getProduct(id);

  if (!product) return;

  const index = wishlist.indexOf(product.id);

  if (index >= 0) {
    wishlist.splice(index, 1);
    showMessage("Removed from wishlist");
  } else {
    wishlist.push(product.id);
    showMessage("Added to wishlist");
  }

  saveWishlist();
  updateWishlistCount();
  renderProducts();
  renderWishlist();

  if (currentProduct && currentProduct.id === product.id) {
    viewProduct(product.id);
  }
}

function renderWishlist() {
  const wishlistContainer = $("#wishlist-items");
  const emptyWishlist = $("#empty-wishlist");

  if (!wishlistContainer) return;

  if (!wishlist.length) {
    wishlistContainer.innerHTML = "";
    if (emptyWishlist) emptyWishlist.style.display = "block";
    return;
  }

  if (emptyWishlist) emptyWishlist.style.display = "none";

  const wishlistProducts = wishlist.map(getProduct).filter(Boolean);

  wishlistContainer.innerHTML = wishlistProducts.map((product) => `
    <article class="product-card">
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-card-content">
        <p class="product-brand">${product.brand}</p>
        <h3>${product.name}</h3>
        <p class="product-price">${money(product.price)}</p>
        <div class="product-card-actions">
          <button class="btn btn-outline" onclick="viewProduct(${product.id})">Details</button>
          <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="btn btn-outline" onclick="toggleWishlist(${product.id})">Remove</button>
        </div>
      </div>
    </article>
  `).join("");
}

// -------------------------
// 8. CHECKOUT
// -------------------------

function renderCheckoutSummary() {
  const summaryContainer = $("#checkout-items");

  if (!summaryContainer) return;

  if (!cart.length) {
    summaryContainer.innerHTML = "<p>Your cart is empty.</p>";
    setText("#checkout-subtotal", money(0));
    setText("#checkout-shipping", money(0));
    setText("#checkout-tax", money(0));
    setText("#checkout-total", money(0));
    return;
  }

  summaryContainer.innerHTML = cart.map((item) => {
    const product = getProduct(item.id);

    if (!product) return "";

    return `
      <div class="checkout-item">
        <span>${product.name} × ${item.quantity}</span>
        <span>${money(product.price * item.quantity)}</span>
      </div>
    `;
  }).join("");

  const totals = getCartTotals();

  setText("#checkout-subtotal", money(totals.subtotal));
  setText("#checkout-shipping", totals.shipping === 0 ? "Free" : money(totals.shipping));
  setText("#checkout-tax", money(totals.tax));
  setText("#checkout-total", money(totals.total));
}

function handleCheckout(event) {
  event.preventDefault();

  if (!cart.length) {
    showMessage("Your cart is empty");
    navigateTo("cart");
    return;
  }

  const form = event.target;
  const formData = new FormData(form);

  const customer = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    address: String(formData.get("address") || "").trim(),
    city: String(formData.get("city") || "").trim(),
    state: String(formData.get("state") || "").trim(),
    zip: String(formData.get("zip") || "").trim(),
    payment: String(formData.get("payment") || "").trim()
  };

  if (!customer.name || !customer.email || !customer.address || !customer.city || !customer.zip) {
    showMessage("Please fill in all required fields");
    return;
  }

  for (const item of cart) {
    const product = getProduct(item.id);
    if (!product || item.quantity > product.stock) {
      showMessage(`Stock unavailable for ${product ? product.name : "an item"}`);
      return;
    }
  }

  const totals = getCartTotals();

  const order = {
    id: `AZ-${Date.now()}`,
    date: new Date().toISOString(),
    customer,
    items: cart.map((item) => {
      const product = getProduct(item.id);
      return {
        id: item.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        quantity: item.quantity
      };
    }),
    totals,
    status: "Placed"
  };

  orders.unshift(order);
  saveOrders();

  cart.forEach((item) => {
    const product = getProduct(item.id);
    if (product) product.stock -= item.quantity;
  });

  cart = [];
  saveCart();
  updateCartCount();

  form.reset();

  const successSection = $("#order-success");
  if (successSection) {
    successSection.innerHTML = `
      <div class="order-success-content">
        <div class="success-icon">✓</div>
        <h2>Order placed successfully!</h2>
        <p>Thank you, ${customer.name}.</p>
        <p>Your order number is:</p>
        <h3>${order.id}</h3>
        <p>Total: <strong>${money(order.totals.total)}</strong></p>
        <button class="btn btn-primary" onclick="navigateTo('products')">Continue Shopping</button>
        <button class="btn btn-outline" onclick="navigateTo('account')">View My Orders</button>
      </div>
    `;
  }

  navigateTo("order-success");
  renderProducts();
  showMessage("Order placed successfully!");
}

function setupCheckout() {
  const checkoutForm = $("#checkout-form");

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleCheckout);
  }
}

// -------------------------
// 9. ACCOUNT & SIMULATED AUTH
// -------------------------

function renderAccount() {
  const accountContainer = $("#account-content");

  if (!accountContainer) return;

  if (!currentUser) {
    accountContainer.innerHTML = `
      <div class="auth-container">
        <h2>Welcome</h2>
        <p>Sign in or create an account to manage your orders.</p>
        <form id="auth-form">
          <label for="auth-name">Full Name (register only)</label>
          <input type="text" id="auth-name" name="name" placeholder="Your name">
          <label for="auth-email">Email</label>
          <input type="email" id="auth-email" name="email" required placeholder="your@email.com">
          <label for="auth-password">Password</label>
          <input type="password" id="auth-password" name="password" required minlength="4" placeholder="Password">
          <div class="auth-actions">
            <button class="btn btn-primary" type="submit" data-auth-mode="login">Login</button>
            <button class="btn btn-outline" type="submit" data-auth-mode="register">Register</button>
          </div>
        </form>
      </div>
    `;

    const authForm = $("#auth-form");

    if (authForm) {
      authForm.addEventListener("submit", handleAuth);
    }

    return;
  }

  const userOrders = orders.filter((order) =>
    order.customer.email.toLowerCase() === currentUser.email.toLowerCase()
  );

  accountContainer.innerHTML = `
    <div class="account-profile">
      <h2>My Account</h2>
      <p><strong>Name:</strong> ${currentUser.name}</p>
      <p><strong>Email:</strong> ${currentUser.email}</p>
      <button class="btn btn-outline" onclick="logout()">Logout</button>
    </div>
    <div class="account-orders">
      <h2>My Orders (${userOrders.length})</h2>
      ${
        userOrders.length
          ? userOrders.map((order) => `
              <div class="order-card">
                <h3>Order ${order.id}</h3>
                <p>${new Date(order.date).toLocaleString()}</p>
                <p>Status: ${order.status}</p>
                <p>Total: ${money(order.totals.total)}</p>
                <div class="order-items">
                  ${order.items.map((item) => `
                    <p>${item.name} × ${item.quantity}</p>
                  `).join("")}
                </div>
              </div>
            `).join("")
          : "<p>No orders yet.</p>"
      }
    </div>
  `;
}

function handleAuth(event) {
  event.preventDefault();

  const submitter = event.submitter;
  const mode = submitter ? submitter.dataset.authMode : "login";
  const form = event.target;
  const formData = new FormData(form);

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");

  if (!email || !password) {
    showMessage("Enter your email and password");
    return;
  }

  if (mode === "register" && !name) {
    showMessage("Enter your name to register");
    return;
  }

  currentUser = {
    name: name || email.split("@")[0],
    email
  };

  saveStorage(STORAGE_KEYS.user, currentUser);
  renderAccount();
  showMessage(mode === "register" ? "Account created (demo)" : "Logged in (demo)");
}

function logout() {
  currentUser = null;
  saveStorage(STORAGE_KEYS.user, null);
  renderAccount();
  showMessage("Logged out");
}

// -------------------------
// 10. CONTACT & NEWSLETTER
// -------------------------

function setupContactForm() {
  const contactForm = $("#contact-form");

  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.reset();
    showMessage("Message submitted successfully (demo)");
  });
}

function setupNewsletter() {
  const newsletterForm = $("#newsletter-form");

  if (!newsletterForm) return;

  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    newsletterForm.reset();
    showMessage("Thank you for subscribing!");
  });
}

// -------------------------
// 11. NAVIGATION & MENU
// -------------------------

function setupNavigation() {
  $$("[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      const page = button.dataset.page;
      navigateTo(page);
    });
  });

  $$(".nav-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const page = link.dataset.page || link.getAttribute("href")?.replace("#", "");
      if (page) navigateTo(page);
    });
  });

  const menuToggle = $("#menu-toggle");
  const navMenu = $("#nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      menuToggle.classList.toggle("active");
    });
  }

  const checkoutButton = $("#checkout-button");
  if (checkoutButton) {
    checkoutButton.addEventListener("click", () => {
      if (!cart.length) {
        showMessage("Your cart is empty");
        return;
      }
      navigateTo("checkout");
    });
  }

  const continueShoppingButtons = $$("[data-continue-shopping]");
  continueShoppingButtons.forEach((button) => {
    button.addEventListener("click", () => navigateTo("products"));
  });
}

// -------------------------
// 12. CATEGORY SHORTCUTS
// -------------------------

function setupCategoryButtons() {
  $$(".category-card, [data-category-link]").forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category || button.dataset.categoryLink;
      const categoryFilter = $("#category-filter");

      if (categoryFilter) {
        categoryFilter.value = category;
      }

      applyFilters();
      navigateTo("products");
    });
  });
}

// -------------------------
// 13. INITIALIZATION
// -------------------------

function initializeAutoZone() {
  updateCartCount();
  updateWishlistCount();
  renderProducts();
  renderCart();
  renderWishlist();
  renderCheckoutSummary();
  setupFilters();
  setupCheckout();
  setupContactForm();
  setupNewsletter();
  setupNavigation();
  setupCategoryButtons();

  navigateTo("home");
}

document.addEventListener("DOMContentLoaded", initializeAutoZone);