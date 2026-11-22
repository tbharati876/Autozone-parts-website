
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
    price: 139.99,
    rating: 4.7,
    compatibility: "Cars and crossovers",
    description: "All-season tire designed for balanced traction, comfort, and handling in everyday driving conditions.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80",
    stock: 12,
    features: ["All-season traction", "Comfortable ride", "Long tread life"]
  },
  {
    id: 4,
    name: "LED Headlight Bulbs",
    brand: "Philips",
    category: "lighting",
    price: 49.99,
    rating: 4.6,
    compatibility: "Compatible vehicle models",
    description: "Bright LED headlight bulbs offering enhanced visibility and a modern lighting appearance.",
    image: "https://images.unsplash.com/photo-1590845947670-c009c7d5a6e8?auto=format&fit=crop&w=700&q=80",
    stock: 30,
    features: ["Bright illumination", "Energy efficient", "Modern LED technology"]
  },
  {
    id: 5,
    name: "Car Battery",
    brand: "DieHard",
    category: "lighting",
    price: 159.99,
    rating: 4.8,
    compatibility: "Various vehicle models",
    description: "Dependable automotive battery designed for reliable starting power and everyday vehicle electrical needs.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf6c58e?auto=format&fit=crop&w=700&q=80",
    stock: 10,
    features: ["Reliable starting", "Durable design", "Dependable power"]
  },
  {
    id: 6,
    name: "Engine Air Filter",
    brand: "K&N",
    category: "engine",
    price: 34.99,
    rating: 4.7,
    compatibility: "Multiple car models",
    description: "Engine air filter designed to help maintain airflow and protect engine components from dust and debris.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=700&q=80",
    stock: 22,
    features: ["Improved airflow", "Washable design", "Engine protection"]
  },
  {
    id: 7,
    name: "Brake Rotor",
    brand: "Brembo",
    category: "brakes",
    price: 109.99,
    rating: 4.8,
    compatibility: "Selected sedan models",
    description: "Precision-engineered brake rotor built for consistent braking and reliable performance.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80",
    stock: 14,
    features: ["Consistent braking", "Heat resistant", "Precision fit"]
  },
  {
    id: 8,
    name: "Alloy Wheel",
    brand: "Goodyear",
    category: "tires",
    price: 199.99,
    rating: 4.5,
    compatibility: "Multiple vehicle fitments",
    description: "Stylish and durable wheel designed to complement vehicle appearance and driving performance.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    stock: 8,
    features: ["Stylish finish", "Durable build", "Road-ready design"]
  },
  {
    id: 9,
    name: "Car Floor Mats",
    brand: "WeatherTech",
    category: "accessories",
    price: 59.99,
    rating: 4.6,
    compatibility: "Universal fit",
    description: "Protective floor mats designed to help keep vehicle interiors clean from dirt, moisture, and everyday wear.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    stock: 16,
    features: ["Interior protection", "Easy cleaning", "Durable material"]
  },
  {
    id: 10,
    name: "Car Phone Mount",
    brand: "Armor All",
    category: "accessories",
    price: 24.99,
    rating: 4.4,
    compatibility: "Most smartphones",
    description: "Secure phone holder designed for convenient hands-free navigation while driving.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80",
    stock: 40,
    features: ["Adjustable holder", "Easy mounting", "Hands-free convenience"]
  },
  {
    id: 11,
    name: "Spark Plug Set",
    brand: "NGK",
    category: "engine",
    price: 39.99,
    rating: 4.8,
    compatibility: "Selected petrol engines",
    description: "Spark plugs designed to provide dependable ignition and smooth engine operation.",
    image: "https://images.unsplash.com/photo-1635785852483-9e6c2f7d2a25?auto=format&fit=crop&w=700&q=80",
    stock: 35,
    features: ["Reliable ignition", "Engine efficiency", "Durable construction"]
  },
  {
    id: 12,
    name: "Brake Fluid",
    brand: "Castrol",
    category: "brakes",
    price: 15.99,
    rating: 4.5,
    compatibility: "Check vehicle specification",
    description: "Quality brake fluid formulated for dependable hydraulic brake system performance.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80",
    stock: 28,
    features: ["Reliable braking", "High performance", "Vehicle maintenance"]
  },
  {
    id: 13,
    name: "LED Fog Lights",
    brand: "Philips",
    category: "lighting",
    price: 69.99,
    rating: 4.6,
    compatibility: "Compatible fog-light housings",
    description: "LED fog light set designed to improve visibility in foggy and low-visibility conditions.",
    image: "https://images.unsplash.com/photo-1590845947670-c009c7d5a6e8?auto=format&fit=crop&w=700&q=80",
    stock: 17,
    features: ["LED technology", "Improved visibility", "Efficient lighting"]
  },
  {
    id: 14,
    name: "Car Seat Cover",
    brand: "Armor All",
    category: "accessories",
    price: 79.99,
    rating: 4.5,
    compatibility: "Universal fit",
    description: "Comfortable seat covers that help protect seats from spills, stains, and daily wear.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    stock: 13,
    features: ["Seat protection", "Comfortable material", "Easy installation"]
  },
  {
    id: 15,
    name: "Synthetic Engine Oil",
    brand: "Mobil 1",
    category: "engine",
    price: 32.99,
    rating: 4.9,
    compatibility: "Check recommended oil grade",
    description: "Synthetic motor oil engineered to support engine protection, performance, and smooth operation.",
    image: "https://images.unsplash.com/photo-1635785852483-9e6c2f7d2a25?auto=format&fit=crop&w=700&q=80",
    stock: 45,
    features: ["Engine protection", "Synthetic formula", "Smooth performance"]
  },
  {
    id: 16,
    name: "Tire Pressure Monitor",
    brand: "Bosch",
    category: "tires",
    price: 44.99,
    rating: 4.5,
    compatibility: "Compatible TPMS systems",
    description: "Tire monitoring component designed to help keep track of tire pressure and support safer driving.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80",
    stock: 20,
    features: ["Pressure monitoring", "Driving safety", "Reliable sensors"]
  },
  {
    id: 17,
    name: "Alternator",
    brand: "Bosch",
    category: "lighting",
    price: 249.99,
    rating: 4.6,
    compatibility: "Selected vehicle models",
    description: "Automotive alternator designed to maintain battery charging and power electrical systems.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf6c58e?auto=format&fit=crop&w=700&q=80",
    stock: 7,
    features: ["Charging system", "Reliable output", "Durable construction"]
  },
  {
    id: 18,
    name: "Car Cleaning Kit",
    brand: "Armor All",
    category: "accessories",
    price: 29.99,
    rating: 4.4,
    compatibility: "All vehicles",
    description: "Essential cleaning supplies for maintaining a clean and polished vehicle exterior and interior.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    stock: 32,
    features: ["Multiple cleaning tools", "Interior and exterior", "Easy vehicle care"]
  },
  {
    id: 19,
    name: "Performance Brake Caliper",
    brand: "Brembo",
    category: "brakes",
    price: 189.99,
    rating: 4.7,
    compatibility: "Selected vehicles",
    description: "Performance brake caliper designed for controlled braking and dependable operation.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80",
    stock: 9,
    features: ["Performance braking", "Durable materials", "Precision engineering"]
  },
  {
    id: 20,
    name: "Heavy Duty Wiper Blades",
    brand: "Michelin",
    category: "accessories",
    price: 22.99,
    rating: 4.6,
    compatibility: "Multiple sizes available",
    description: "Wiper blades designed to provide clear windshield visibility during rain and changing weather.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
    stock: 26,
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
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
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
  return "$" + Number(amount).toFixed(2);
}

function getProduct(id) {
  return products.find((product) => product.id === Number(id));
}

function saveCart() {
  saveStorage(STORAGE_KEYS.cart, cart);
  updateCartCount();
}

function saveWishlist() {
  saveStorage(STORAGE_KEYS.wishlist, wishlist);
  updateWishlistCount();
}

function saveOrders() {
  saveStorage(STORAGE_KEYS.orders, orders);
}

function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const el = $("#cart-count");
  if (el) el.textContent = count;
}

function updateWishlistCount() {
  const el = $("#wishlist-count");
  if (el) el.textContent = wishlist.length;
}

function showMessage(message) {
  let toast = $("#autozone-toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "autozone-toast";
    toast.className = "toast";
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
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// -------------------------
// 4. PRODUCT DISPLAY
// -------------------------

function renderProducts(productList = products) {
  const grid = $("#product-grid");
  if (!grid) return;

  if (productList.length === 0) {
    grid.innerHTML = "";
    const noProducts = $("#no-products");
    if (noProducts) noProducts.style.display = "block";
    return;
  }

  const noProducts = $("#no-products");
  if (noProducts) noProducts.style.display = "none";

  grid.innerHTML = productList.map((product) => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.src='https://placehold.co/600x400?text=Auto+Part'"
        >
        <button
          class="wishlist-button ${wishlist.includes(product.id) ? "active" : ""}"
          onclick="toggleWishlist(${product.id})"
          aria-label="Toggle wishlist"
          title="Add to wishlist"
        >${wishlist.includes(product.id) ? "♥" : "♡"}</button>
      </div>

      <div class="product-card-body">
        <span class="product-brand">${product.brand}</span>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-rating">★ ${product.rating} <span>(${Math.floor(product.rating * 20)} reviews)</span></div>
        <p class="product-compatibility">${product.compatibility}</p>
        <div class="product-card-bottom">
          <span class="product-price">${money(product.price)}</span>
          <button class="btn btn-primary add-to-cart-btn" onclick="addToCart(${product.id})">
            Add to Cart
          </button>
        </div>
        <button class="view-details-btn" onclick="viewProduct(${product.id})">View Details</button>
      </div>
    </article>
  `).join("");
}

function viewProduct(id) {
  const product = getProduct(id);
  if (!product) return;

  currentProduct = product;

  const section = $("#product-detail");
  if (!section) return;

  section.innerHTML = `
    <div class="product-detail-container">
      <button class="btn btn-secondary" onclick="navigateTo('products')">← Back to Products</button>

      <div class="product-detail-content">
        <div class="product-detail-image">
          <img src="${product.image}" alt="${product.name}"
            onerror="this.src='https://placehold.co/600x400?text=Auto+Part'">
        </div>

        <div class="product-detail-info">
          <span class="product-brand">${product.brand}</span>
          <h2>${product.name}</h2>
          <div class="product-rating">★ ${product.rating} / 5</div>
          <h3 class="product-detail-price">${money(product.price)}</h3>
          <p>${product.description}</p>

          <p><strong>Compatibility:</strong> ${product.compatibility}</p>
          <p><strong>Availability:</strong> ${product.stock > 0 ? "In Stock" : "Out of Stock"}</p>

          <h4>Features</h4>
          <ul>${product.features.map(feature => `<li>${feature}</li>`).join("")}</ul>

          <div class="product-detail-actions">
            <button class="btn btn-primary" onclick="addToCart(${product.id})" ${product.stock <= 0 ? "disabled" : ""}>
              Add to Cart
            </button>
            <button class="btn btn-secondary" onclick="toggleWishlist(${product.id})">
              ${wishlist.includes(product.id) ? "♥ Wishlisted" : "♡ Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>

      <div class="related-products">
        <h3>Related Products</h3>
        <div class="product-grid">
          ${products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3).map(p => `
            <article class="product-card">
              <img src="${p.image}" alt="${p.name}" onerror="this.src='https://placehold.co/600x400?text=Auto+Part'">
              <h4>${p.name}</h4>
              <p>${money(p.price)}</p>
              <button class="btn btn-primary" onclick="viewProduct(${p.id})">View Product</button>
            </article>
          `).join("")}
        </div>
      </div>
    </div>
  `;

  navigateTo("product-detail");
}

// -------------------------
// 5. SEARCH, FILTER & SORT
// -------------------------

function applyFilters() {
  const search = ($("#product-search")?.value || "").trim().toLowerCase();
  const category = $("#category-filter")?.value || "all";
  const brand = $("#brand-filter")?.value || "all";
  const priceRange = $("#price-filter")?.value || "all";
  const sort = $("#sort-filter")?.value || "default";

  let filtered = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.brand.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search);

    const matchesCategory = category === "all" || product.category === category;
    const matchesBrand = brand === "all" || product.brand === brand;

    let matchesPrice = true;
    if (priceRange === "0-50") matchesPrice = product.price <= 50;
    if (priceRange === "50-100") matchesPrice = product.price > 50 && product.price <= 100;
    if (priceRange === "100-200") matchesPrice = product.price > 100 && product.price <= 200;
    if (priceRange === "200+") matchesPrice = product.price > 200;

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  });

  switch (sort) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  renderProducts(filtered);
}

function setupFilters() {
  const brandFilter = $("#brand-filter");
  if (brandFilter) {
    const brands = [...new Set(products.map(product => product.brand))].sort();

    brands.forEach(brand => {
      if (![...brandFilter.options].some(option => option.value === brand)) {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
      }
    });
  }

  ["#category-filter", "#brand-filter", "#price-filter", "#sort-filter"].forEach(selector => {
    const element = $(selector);
    if (element) element.addEventListener("change", applyFilters);
  });

  const search = $("#product-search");
  if (search) search.addEventListener("input", applyFilters);

  const searchButton = $("#search-btn");
  if (searchButton) searchButton.addEventListener("click", applyFilters);
}

// -------------------------
// 6. CART FUNCTIONALITY
// -------------------------

function addToCart(id) {
  const product = getProduct(id);
  if (!product) return;

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    if (existing.quantity >= product.stock) {
      showMessage("Maximum available stock reached.");
      return;
    }
    existing.quantity += 1;
  } else {
    cart.push({ id: product.id, quantity: 1 });
  }

  saveCart();
  renderCart();
  showMessage(`${product.name} added to cart!`);
}

function changeQuantity(id, amount) {
  const item = cart.find(item => item.id === Number(id));
  const product = getProduct(id);
  if (!item || !product) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(cartItem => cartItem.id !== Number(id));
  } else if (item.quantity > product.stock) {
    item.quantity = product.stock;
    showMessage("Maximum available stock reached.");
  }

  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== Number(id));
  saveCart();
  renderCart();
  showMessage("Item removed from cart.");
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
  const container = $("#cart-items");
  if (!container) return;

  const empty = $("#cart-empty");
  const summary = $("#cart-summary");

  if (cart.length === 0) {
    container.innerHTML = "";
    if (empty) empty.style.display = "block";
    if (summary) summary.style.display = "none";
  } else {
    if (empty) empty.style.display = "none";
    if (summary) summary.style.display = "block";

    container.innerHTML = cart.map(item => {
      const product = getProduct(item.id);
      if (!product) return "";

      return `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}"
            onerror="this.src='https://placehold.co/150x150?text=Auto+Part'">
          <div class="cart-item-info">
            <h3>${product.name}</h3>
            <p>${product.brand}</p>
            <p class="cart-item-price">${money(product.price)}</p>
            <div class="quantity-control">
              <button onclick="changeQuantity(${product.id}, -1)">−</button>
              <span>${item.quantity}</span>
              <button onclick="changeQuantity(${product.id}, 1)">+</button>
            </div>
          </div>
          <div class="cart-item-total">
            <strong>${money(product.price * item.quantity)}</strong>
            <button class="remove-item-btn" onclick="removeFromCart(${product.id})">Remove</button>
          </div>
        </div>
      `;
    }).join("");
  }

  const totals = getCartTotals();
  setText("#cart-subtotal", money(totals.subtotal));
  setText("#cart-shipping", totals.shipping === 0 ? "FREE" : money(totals.shipping));
  setText("#cart-tax", money(totals.tax));
  setText("#cart-total", money(totals.total));

  const checkoutBtn = $("#checkout-btn");
  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;

  renderCheckoutSummary();
}

function setText(selector, value) {
  const el = $(selector);
  if (el) el.textContent = value;
}

// -------------------------
// 7. WISHLIST
// -------------------------

function toggleWishlist(id) {
  const product = getProduct(id);
  if (!product) return;

  if (wishlist.includes(product.id)) {
    wishlist = wishlist.filter(item => item !== product.id);
    showMessage("Removed from wishlist.");
  } else {
    wishlist.push(product.id);
    showMessage("Added to wishlist!");
  }

  saveWishlist();
  renderProducts();
  renderWishlist();

  if (currentProduct && currentProduct.id === product.id) {
    viewProduct(product.id);
  }
}

function renderWishlist() {
  const grid = $("#wishlist-grid");
  if (!grid) return;

  const empty = $("#wishlist-empty");

  if (wishlist.length === 0) {
    grid.innerHTML = "";
    if (empty) empty.style.display = "block";
    return;
  }

  if (empty) empty.style.display = "none";

  const wishlistProducts = products.filter(product => wishlist.includes(product.id));

  grid.innerHTML = wishlistProducts.map(product => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}"
        onerror="this.src='https://placehold.co/600x400?text=Auto+Part'">
      <div class="product-card-body">
        <h3>${product.name}</h3>
        <p>${product.brand}</p>
        <p class="product-price">${money(product.price)}</p>
        <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
        <button class="btn btn-secondary" onclick="toggleWishlist(${product.id})">Remove ♥</button>
        <button class="view-details-btn" onclick="viewProduct(${product.id})">View Details</button>
      </div>
    </article>
  `).join("");
}

// -------------------------
// 8. CHECKOUT
// -------------------------

function renderCheckoutSummary() {
  const container = $("#checkout-items");
  if (!container) return;

  container.innerHTML = cart.map(item => {
    const product = getProduct(item.id);
    if (!product) return "";
    return `
      <div class="checkout-item">
        <span>${product.name} × ${item.quantity}</span>
        <strong>${money(product.price * item.quantity)}</strong>
      </div>
    `;
  }).join("");

  const totals = getCartTotals();
  setText("#checkout-subtotal", money(totals.subtotal));
  setText("#checkout-shipping", totals.shipping === 0 ? "FREE" : money(totals.shipping));
  setText("#checkout-tax", money(totals.tax));
  setText("#checkout-total", money(totals.total));
}

function handleCheckout(event) {
  event.preventDefault();

  if (cart.length === 0) {
    showMessage("Your cart is empty.");
    navigateTo("cart");
    return;
  }

  const form = event.target;
  const formData = new FormData(form);

  const customer = {
    name: formData.get("name") || formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    city: formData.get("city"),
    state: formData.get("state"),
    zip: formData.get("zip") || formData.get("postalCode"),
    payment: formData.get("payment")
  };

  const totals = getCartTotals();

  const order = {
    id: "AZ" + Date.now().toString().slice(-8),
    date: new Date().toLocaleString(),
    customer,
    items: cart.map(item => {
      const product = getProduct(item.id);
      return {
        id: item.id,
        name: product.name,
        price: product.price,
        quantity: item.quantity
      };
    }),
    totals,
    status: "Order Placed"
  };

  orders.push(order);
  saveOrders();

  cart = [];
  saveCart();
  renderCart();

  const successSection = $("#order-success");
  if (successSection) {
    successSection.innerHTML = `
      <div class="order-success-content">
        <div class="success-icon">✓</div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for shopping with AutoZone.</p>
        <p>Your order number is:</p>
        <h3>${order.id}</h3>
        <p>Order Total: <strong>${money(totals.total)}</strong></p>
        <p>This is a demo checkout. No real payment was processed.</p>
        <button class="btn btn-primary" onclick="navigateTo('products')">Continue Shopping</button>
        <button class="btn btn-secondary" onclick="navigateTo('account')">View Account</button>
      </div>
    `;
  }

  form.reset();
  navigateTo("order-success");
  showMessage("Order placed successfully!");
}

function setupCheckout() {
  const form = $("#checkout-form");
  if (form) form.addEventListener("submit", handleCheckout);

  const backButton = $("#back-to-cart");
  if (backButton) {
    backButton.addEventListener("click", () => navigateTo("cart"));
  }
}

// -------------------------
// 9. ACCOUNT & SIMULATED AUTH
// -------------------------

function renderAccount() {
  const account = $("#account");
  if (!account) return;

  if (!currentUser) {
    account.innerHTML = `
      <div class="account-box">
        <h2>Your Account</h2>
        <p>Please login or create an account to view your profile and order history.</p>
        <button class="btn btn-primary" onclick="navigateTo('auth')">Login / Register</button>
      </div>
    `;
    return;
  }

  account.innerHTML = `
    <div class="account-box">
      <h2>Welcome, ${currentUser.name}!</h2>
      <p>Email: ${currentUser.email}</p>
      <h3>Order History</h3>
      ${
        orders.length === 0
          ? "<p>You haven't placed any orders yet.</p>"
          : orders.map(order => `
              <div class="order-card">
                <h4>Order #${order.id}</h4>
                <p>${order.date}</p>
                <p>Status: ${order.status}</p>
                <p>Total: ${money(order.totals.total)}</p>
                <ul>${order.items.map(item => `<li>${item.name} × ${item.quantity}</li>`).join("")}</ul>
              </div>
            `).join("")
      }
      <button class="btn btn-secondary" onclick="logout()">Logout</button>
    </div>
  `;
}

function handleAuth(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    showMessage("Please enter your email and password.");
    return;
  }

  // Simulated authentication only.
  currentUser = {
    name: name || email.split("@")[0],
    email
  };

  saveStorage(STORAGE_KEYS.user, currentUser);
  renderAccount();
  form.reset();

  showMessage("Welcome! Login successful.");
  navigateTo("account");
}

function logout() {
  currentUser = null;
  localStorage.removeItem(STORAGE_KEYS.user);
  renderAccount();
  showMessage("You have been logged out.");
  navigateTo("home");
}

// -------------------------
// 10. CONTACT & NEWSLETTER
// -------------------------

function setupContactForm() {
  const form = $("#contact-form");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();
    form.reset();
    showMessage("Your message has been submitted! (Demo)");
  });
}

function setupNewsletter() {
  const form = $("#newsletter-form");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();
    form.reset();
    showMessage("Thanks for subscribing!");
  });
}

// -------------------------
// 11. NAVIGATION & MENU
// -------------------------

function setupNavigation() {
  const menuToggle = $("#menu-toggle");
  const navLinks = $("#nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  // Close mobile navigation after clicking a link.
  if (navLinks) {
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle?.classList.remove("active");
      });
    });
  }

  const cartButton = $("#cart-nav-btn");
  if (cartButton) {
    cartButton.addEventListener("click", event => {
      event.preventDefault();
      renderCart();
      navigateTo("cart");
    });
  }

  const wishlistButton = $("#wishlist-nav-btn");
  if (wishlistButton) {
    wishlistButton.addEventListener("click", event => {
      event.preventDefault();
      renderWishlist();
      navigateTo("wishlist");
    });
  }

  const accountButton = $("#account-nav-btn");
  if (accountButton) {
    accountButton.addEventListener("click", event => {
      event.preventDefault();
      renderAccount();
      navigateTo("account");
    });
  }

  // Support regular anchor links for section navigation.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const id = link.getAttribute("href")?.slice(1);
      if (id && document.getElementById(id)) {
        event.preventDefault();
        navigateTo(id);
      }
    });
  });
}

// -------------------------
// 12. CATEGORY SHORTCUTS
// -------------------------

function setupCategoryButtons() {
  document.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      const filter = $("#category-filter");

      if (filter) {
        filter.value = category;
        applyFilters();
      }

      navigateTo("products");
    });
  });
}

// -------------------------
// 13. INITIALIZATION
// -------------------------

function initializeAutoZone() {
  setupFilters();
  setupNavigation();
  setupCategoryButtons();
  setupCheckout();
  setupContactForm();
  setupNewsletter();

  renderProducts();
  renderCart();
  renderWishlist();
  renderAccount();

  updateCartCount();
  updateWishlistCount();

  console.log("AutoZone website initialized successfully.");
}

document.addEventListener("DOMContentLoaded", initializeAutoZone);
