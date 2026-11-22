// ============================================================
// AUTOZONE - AUTO PARTS E-COMMERCE
// Frontend-only application using JavaScript + localStorage
// ============================================================

// -------------------------
// 1. PRODUCT IMAGE GENERATOR
// -------------------------

// Generates self-contained SVG product images.
// Images do not rely on external websites or URLs.

function createProductImage(name, symbol, accent = "#f97316") {
    const safeName = String(name).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    }[char]));

    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 500">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f8fafc"/>
          <stop offset="100%" stop-color="#e2e8f0"/>
        </linearGradient>

        <linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity=".8"/>
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
        </linearGradient>
      </defs>

      <rect width="700" height="500" rx="28" fill="url(#bg)"/>

      <circle cx="560" cy="110" r="85" fill="${accent}" opacity=".12"/>
      <circle cx="140" cy="405" r="105" fill="${accent}" opacity=".08"/>

      <rect x="72" y="70" width="556" height="360" rx="24"
            fill="#ffffff" opacity=".55"/>

      <rect x="88" y="86" width="524" height="328" rx="20"
            fill="none" stroke="${accent}" stroke-opacity=".22"
            stroke-width="3"/>

      <text x="350" y="275"
            font-size="150"
            text-anchor="middle"
            dominant-baseline="middle">${symbol}</text>

      <rect x="105" y="355" width="490" height="48" rx="14"
            fill="${accent}" opacity=".12"/>

      <text x="350" y="385"
            font-family="Arial, Helvetica, sans-serif"
            font-size="22"
            font-weight="700"
            fill="#1e293b"
            text-anchor="middle">${safeName}</text>

      <rect x="72" y="70" width="556" height="360" rx="24"
            fill="url(#shine)" opacity=".22"/>
    </svg>`;

    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}


// -------------------------
// 2. PRODUCT DATA
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
        description: "Premium oil filter engineered to help protect your engine from contaminants.",
        image: createProductImage("Premium Oil Filter", "🛢️", "#e67e22"),
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
        description: "High-performance ceramic brake pads designed for quiet braking and dependable stopping power.",
        image: createProductImage("Ceramic Brake Pads", "🛑", "#dc2626"),
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
        description: "All-season tire providing balanced grip, comfort, and performance.",
        image: createProductImage("All-Season Car Tire", "🛞", "#334155"),
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
        image: createProductImage("LED Headlight Bulbs", "💡", "#facc15"),
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
        image: createProductImage("Car Battery", "🔋", "#16a34a"),
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
        description: "Engine air filter designed to maintain clean airflow and engine performance.",
        image: createProductImage("Engine Air Filter", "🌬️", "#0ea5e9"),
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
        image: createProductImage("Brake Rotor", "⚙️", "#dc2626"),
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
        image: createProductImage("Alloy Wheel", "🛞", "#64748b"),
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
        image: createProductImage("Car Floor Mats", "🚘", "#475569"),
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
        image: createProductImage("Car Phone Mount", "📱", "#2563eb"),
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
        image: createProductImage("Spark Plug Set", "⚡", "#eab308"),
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
        image: createProductImage("Brake Fluid", "🧴", "#dc2626"),
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
        image: createProductImage("LED Fog Lights", "🔦", "#f59e0b"),
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
        image: createProductImage("Car Seat Cover", "💺", "#7c3aed"),
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
        image: createProductImage("Synthetic Engine Oil", "🛢️", "#e67e22"),
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
        image: createProductImage("Tire Pressure Monitor", "📟", "#0ea5e9"),
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
        image: createProductImage("Alternator", "⚙️", "#64748b"),
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
        image: createProductImage("Car Cleaning Kit", "🧽", "#06b6d4"),
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
        image: createProductImage("Performance Brake Caliper", "🛑", "#dc2626"),
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
        image: createProductImage("Heavy Duty Wiper Blades", "🌧️", "#2563eb"),
        stock: 32,
        features: ["Clear visibility", "Weather resistant", "Easy replacement"]
    }
];


// -------------------------
// 3. STORAGE
// -------------------------

const STORAGE = {
    cart: "autozone_cart",
    wishlist: "autozone_wishlist",
    user: "autozone_user",
    orders: "autozone_orders"
};

function loadData(key, fallback) {
    try {
        return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
        return fallback;
    }
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

let cart = loadData(STORAGE.cart, []);
let wishlist = loadData(STORAGE.wishlist, []);
let currentUser = loadData(STORAGE.user, null);
let orders = loadData(STORAGE.orders, []);

let currentProduct = null;
let filteredProducts = [...products];


// -------------------------
// 4. HELPERS
// -------------------------

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function money(value) {
    return "$" + Number(value || 0).toFixed(2);
}

function getProduct(id) {
    return products.find(p => p.id === Number(id));
}

function setText(selector, text) {
    const el = $(selector);
    if (el) el.textContent = text;
}

function showMessage(message) {
    const toast = $("#toast-message");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showMessage.timer);
    showMessage.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function updateCounts() {
    setText("#cart-count", cart.reduce((sum, item) => sum + item.quantity, 0));
    setText("#wishlist-count", wishlist.length);
}


// -------------------------
// 5. NAVIGATION
// -------------------------

function navigateTo(page) {
    const section = document.getElementById(page);

    if (!section) {
        showMessage("Page not found: " + page);
        return;
    }

    $$(".page-section").forEach(s => s.classList.remove("active"));
    section.classList.add("active");

    if (page === "cart") renderCart();
    if (page === "wishlist") renderWishlist();
    if (page === "checkout") renderCheckoutSummary();
    if (page === "account") renderAccount();
    if (page === "products") renderAllProducts();

    const navMenu = $("#nav-menu");
    if (navMenu) navMenu.classList.remove("open");

    window.scrollTo({ top: 0, behavior: "smooth" });
}


// -------------------------
// 6. PRODUCT CARDS
// -------------------------

function productCard(product) {
    const wished = wishlist.includes(product.id);

    return `
        <article class="product-card">
            <div class="product-image-container">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <button class="wishlist-button ${wished ? "active" : ""}"
                    onclick="toggleWishlist(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>

            <div class="product-card-content">
                <p class="product-brand">${product.brand}</p>
                <h3>${product.name}</h3>
                <p class="product-rating">★ ${product.rating}</p>
                <p class="product-price">${money(product.price)}</p>

                <p class="product-stock">
                    ${product.stock > 0 ? "In Stock" : "Out of Stock"}
                </p>

                <div class="product-card-actions">
                    <button class="btn btn-outline"
                        onclick="viewProduct(${product.id})">
                        Details
                    </button>

                    <button class="btn btn-primary"
                        onclick="addToCart(${product.id})"
                        ${product.stock <= 0 ? "disabled" : ""}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </article>
    `;
}

function renderProducts(list = products) {
    const grid = $("#product-grid");
    if (grid) grid.innerHTML = list.slice(0, 8).map(productCard).join("");
}

function renderAllProducts(list = filteredProducts) {
    const grid = $("#all-products-grid");
    const empty = $("#products-no-results");

    if (!grid) return;

    grid.innerHTML = list.map(productCard).join("");

    if (empty) empty.style.display = list.length ? "none" : "block";
}


// -------------------------
// 7. PRODUCT DETAILS
// -------------------------

function viewProduct(id) {
    const product = getProduct(id);
    if (!product) return;

    currentProduct = product;

    const detail = $("#product-detail");
    if (!detail) return;

    detail.innerHTML = `
        <div class="product-detail-container">
            <div class="product-detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-detail-info">
                <span class="product-brand">${product.brand}</span>
                <h2>${product.name}</h2>
                <p>★ ${product.rating}</p>

                <h2 class="product-detail-price">${money(product.price)}</h2>

                <p>${product.description}</p>
                <p><strong>Compatibility:</strong> ${product.compatibility}</p>
                <p><strong>Available stock:</strong> ${product.stock}</p>

                <h3>Features</h3>
                <ul>${product.features.map(f => `<li>${f}</li>`).join("")}</ul>

                <button class="btn btn-primary"
                    onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

                <button class="btn btn-outline"
                    onclick="toggleWishlist(${product.id})">
                    ${wishlist.includes(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                </button>
            </div>
        </div>
    `;

    navigateTo("product-detail-page");
}


// -------------------------
// 8. SEARCH & FILTERS
// -------------------------

function applyFilters() {
    const search = ($("#product-search")?.value || "").toLowerCase().trim();
    const category = $("#category-filter")?.value || "all";
    const brand = $("#brand-filter")?.value || "all";
    const price = $("#price-filter")?.value || "all";

    filteredProducts = products.filter(product => {
        const matchSearch = `${product.name} ${product.brand} ${product.category} ${product.description}`
            .toLowerCase().includes(search);

        const matchCategory = category === "all" ||
            (category === "brakes-tires" && ["brakes", "tires"].includes(product.category)) ||
            product.category === category;

        const matchBrand = brand === "all" || product.brand === brand;

        let matchPrice = true;

        if (price !== "all") {
            if (price === "1000+") {
                matchPrice = product.price >= 1000;
            } else {
                const [min, max] = price.split("-").map(Number);
                matchPrice = product.price >= min && product.price <= max;
            }
        }

        return matchSearch && matchCategory && matchBrand && matchPrice;
    });

    renderAllProducts();
    renderProducts(filteredProducts);
}

function resetFilters() {
    if ($("#product-search")) $("#product-search").value = "";
    if ($("#category-filter")) $("#category-filter").value = "all";
    if ($("#brand-filter")) $("#brand-filter").value = "all";
    if ($("#price-filter")) $("#price-filter").value = "all";
    if ($("#sort-products")) $("#sort-products").value = "default";

    filteredProducts = [...products];

    renderProducts(products);
    renderAllProducts(products);
}

function sortProducts() {
    const sort = $("#sort-products")?.value || "default";
    let list = [...filteredProducts];

    switch (sort) {
        case "price-low":
            list.sort((a, b) => a.price - b.price);
            break;

        case "price-high":
            list.sort((a, b) => b.price - a.price);
            break;

        case "rating-high":
            list.sort((a, b) => b.rating - a.rating);
            break;

        case "name-az":
            list.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }

    renderAllProducts(list);
}


// -------------------------
// 9. CART
// -------------------------

function addToCart(id) {
    const product = getProduct(id);
    if (!product) return showMessage("Product not found");

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        if (existing.quantity >= product.stock)
            return showMessage("Stock limit reached");

        existing.quantity++;
    } else {
        cart.push({ id: product.id, quantity: 1 });
    }

    saveData(STORAGE.cart, cart);
    updateCounts();
    renderCart();

    showMessage(product.name + " added to cart");

    navigateTo("cart");
}

function changeQuantity(id, change) {
    const item = cart.find(i => i.id === Number(id));
    const product = getProduct(id);

    if (!item || !product) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(id);
        return;
    }

    if (item.quantity > product.stock) {
        item.quantity = product.stock;
        showMessage("Maximum stock reached");
    }

    saveData(STORAGE.cart, cart);
    updateCounts();
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== Number(id));

    saveData(STORAGE.cart, cart);
    updateCounts();
    renderCart();

    showMessage("Item removed");
}

function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => {
        const product = getProduct(item.id);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);

    const shipping = subtotal === 0 || subtotal >= 100 ? 0 : 9.99;
    const tax = subtotal * 0.08;

    return {
        subtotal,
        shipping,
        tax,
        total: subtotal + shipping + tax
    };
}

function renderCart() {
    const container = $("#cart-items");
    const empty = $("#empty-cart");
    const summary = $("#cart-summary");

    if (!container) return;

    if (!cart.length) {
        container.innerHTML = "";

        if (empty) empty.style.display = "block";
        if (summary) summary.style.display = "none";

        return;
    }

    if (empty) empty.style.display = "none";
    if (summary) summary.style.display = "block";

    container.innerHTML = cart.map(item => {
        const p = getProduct(item.id);
        if (!p) return "";

        return `
            <div class="cart-item">
                <img src="${p.image}" alt="${p.name}">

                <div class="cart-item-info">
                    <h3>${p.name}</h3>
                    <p>${p.brand}</p>
                    <strong>${money(p.price)}</strong>
                </div>

                <div class="cart-quantity-controls">
                    <button onclick="changeQuantity(${p.id},-1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${p.id},1)">+</button>
                </div>

                <button class="remove-item-button"
                    onclick="removeFromCart(${p.id})">
                    Remove
                </button>
            </div>
        `;
    }).join("");

    const t = calculateTotals();

    setText("#cart-subtotal", money(t.subtotal));
    setText("#cart-shipping", t.shipping === 0 ? "Free" : money(t.shipping));
    setText("#cart-tax", money(t.tax));
    setText("#cart-total", money(t.total));
}


// -------------------------
// 10. WISHLIST
// -------------------------

function toggleWishlist(id) {
    id = Number(id);

    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(item => item !== id);
        showMessage("Removed from wishlist");
    } else {
        wishlist.push(id);
        showMessage("Added to wishlist");
    }

    saveData(STORAGE.wishlist, wishlist);
    updateCounts();

    renderProducts();
    renderAllProducts();
    renderWishlist();

    if (currentProduct && currentProduct.id === id) {
        viewProduct(id);
    }
}

function renderWishlist() {
    const container = $("#wishlist-items");
    const empty = $("#empty-wishlist");

    if (!container) return;

    const list = wishlist.map(getProduct).filter(Boolean);

    if (!list.length) {
        container.innerHTML = "";

        if (empty) empty.style.display = "block";

        return;
    }

    if (empty) empty.style.display = "none";

    container.innerHTML = list.map(productCard).join("");
}


// -------------------------
// 11. CHECKOUT
// -------------------------

function renderCheckoutSummary() {
    const container = $("#checkout-items");
    if (!container) return;

    container.innerHTML = cart.map(item => {
        const p = getProduct(item.id);
        if (!p) return "";

        return `
            <div class="checkout-item">
                <span>${p.name} × ${item.quantity}</span>
                <span>${money(p.price * item.quantity)}</span>
            </div>
        `;
    }).join("");

    const t = calculateTotals();

    setText("#checkout-subtotal", money(t.subtotal));
    setText("#checkout-shipping", t.shipping === 0 ? "Free" : money(t.shipping));
    setText("#checkout-tax", money(t.tax));
    setText("#checkout-total", money(t.total));
}

function handleCheckout(event) {
    event.preventDefault();

    if (!cart.length) {
        showMessage("Your cart is empty");
        navigateTo("cart");
        return;
    }

    const form = event.target;
    if (!form.reportValidity()) return;

    const fd = new FormData(form);

    const customer = {
        name: fd.get("name"),
        email: fd.get("email"),
        phone: fd.get("phone"),
        zip: fd.get("zip"),
        address: fd.get("address"),
        city: fd.get("city"),
        state: fd.get("state"),
        payment: fd.get("payment")
    };

    for (const item of cart) {
        const p = getProduct(item.id);

        if (!p || item.quantity > p.stock) {
            showMessage("Insufficient stock");
            return;
        }
    }

    const totals = calculateTotals();

    const order = {
        id: "AZ-" + Date.now(),
        date: new Date().toISOString(),
        customer,
        items: cart.map(item => {
            const p = getProduct(item.id);

            return {
                id: p.id,
                name: p.name,
                brand: p.brand,
                price: p.price,
                quantity: item.quantity
            };
        }),
        totals,
        status: "Placed"
    };

    orders.unshift(order);
    saveData(STORAGE.orders, orders);

    cart.forEach(item => {
        const p = getProduct(item.id);
        if (p) p.stock -= item.quantity;
    });

    cart = [];

    saveData(STORAGE.cart, cart);

    updateCounts();
    renderCart();
    renderProducts();
    renderAllProducts();

    $("#order-success").innerHTML = `
        <div class="order-success-content">
            <div class="success-icon">
                <i class="fas fa-check"></i>
            </div>

            <h1>Order Placed Successfully!</h1>
            <p>Thank you, ${customer.name}!</p>
            <p>Your order number:</p>
            <h2>${order.id}</h2>
            <p>Total: <strong>${money(totals.total)}</strong></p>

            <button class="btn btn-primary"
                onclick="navigateTo('products')">
                Continue Shopping
            </button>

            <button class="btn btn-outline"
                onclick="navigateTo('account')">
                View Orders
            </button>
        </div>
    `;

    form.reset();

    navigateTo("order-success");
    showMessage("Order placed successfully!");
}


// -------------------------
// 12. ACCOUNT & AUTH
// -------------------------

function renderAccount() {
    const container = $("#account-content");
    if (!container) return;

    if (!currentUser) {
        container.innerHTML = `
            <div class="auth-container">
                <h2>Login / Register</h2>

                <form id="auth-form">
                    <label>Full Name (registration)</label>
                    <input name="name" id="auth-name" placeholder="Full name">

                    <label>Email</label>
                    <input name="email" type="email"
                        required placeholder="Email address">

                    <label>Password</label>
                    <input name="password" type="password"
                        minlength="4" required placeholder="Password">

                    <div class="auth-actions">
                        <button type="submit" class="btn btn-primary"
                            data-mode="login">
                            Login
                        </button>

                        <button type="submit" class="btn btn-outline"
                            data-mode="register">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        `;

        $("#auth-form").addEventListener("submit", handleAuth);

        return;
    }

    const userOrders = orders.filter(o =>
        o.customer.email.toLowerCase() === currentUser.email.toLowerCase()
    );

    container.innerHTML = `
        <div class="account-profile">
            <h2>Welcome, ${currentUser.name}</h2>
            <p><strong>Email:</strong> ${currentUser.email}</p>

            <button class="btn btn-outline" onclick="logout()">
                Logout
            </button>
        </div>

        <div class="account-orders">
            <h2>Order History (${userOrders.length})</h2>

            ${userOrders.length ? userOrders.map(order => `
                <div class="order-card">
                    <h3>${order.id}</h3>
                    <p>${new Date(order.date).toLocaleString()}</p>
                    <p>Status: ${order.status}</p>
                    <p>Total: ${money(order.totals.total)}</p>

                    ${order.items.map(item =>
                        `<p>${item.name} × ${item.quantity}</p>`
                    ).join("")}
                </div>
            `).join("") : "<p>You haven't placed any orders yet.</p>"}
        </div>
    `;
}

function handleAuth(event) {
    event.preventDefault();

    const mode = event.submitter?.dataset.mode || "login";
    const fd = new FormData(event.target);

    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim().toLowerCase();
    const password = String(fd.get("password") || "");

    if (!email || !password)
        return showMessage("Enter email and password");

    if (mode === "register" && !name)
        return showMessage("Enter your name");

    // Demo authentication only.
    // No real password is stored.

    currentUser = {
        name: name || email.split("@")[0],
        email
    };

    saveData(STORAGE.user, currentUser);

    renderAccount();

    showMessage(
        mode === "register"
            ? "Registration successful (demo)"
            : "Login successful (demo)"
    );
}

function logout() {
    currentUser = null;

    saveData(STORAGE.user, null);

    renderAccount();

    showMessage("Logged out");
}


// -------------------------
// 13. CONTACT / NEWSLETTER
// -------------------------

function setupForms() {
    $("#checkout-form")?.addEventListener("submit", handleCheckout);

    $("#contact-form")?.addEventListener("submit", event => {
        event.preventDefault();
        event.target.reset();
        showMessage("Your message has been submitted (demo)");
    });

    $("#newsletter-form")?.addEventListener("submit", event => {
        event.preventDefault();
        event.target.reset();
        showMessage("Thank you for subscribing!");
    });
}


// -------------------------
// 14. EVENT LISTENERS
// -------------------------

function setupEvents() {
    $("#search-btn")?.addEventListener("click", () => {
        applyFilters();
        navigateTo("products");
    });

    $("#product-search")?.addEventListener("input", applyFilters);

    $("#product-search")?.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            applyFilters();
            navigateTo("products");
        }
    });

    ["#category-filter", "#brand-filter", "#price-filter"].forEach(selector => {
        $(selector)?.addEventListener("change", applyFilters);
    });

    $("#sort-products")?.addEventListener("change", sortProducts);

    $("#checkout-button")?.addEventListener("click", () => {
        if (!cart.length)
            return showMessage("Your cart is empty");

        navigateTo("checkout");
    });

    $("#menu-toggle")?.addEventListener("click", () => {
        $("#nav-menu")?.classList.toggle("open");
    });

    $$("[data-page]").forEach(button => {
        button.addEventListener("click", () => navigateTo(button.dataset.page));
    });

    $$(".nav-link").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            navigateTo(link.dataset.page);
        });
    });

    $$(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            const category = card.dataset.category;
            $("#category-filter").value = category;
            applyFilters();
            navigateTo("products");
        });
    });

    $$("[data-continue-shopping]").forEach(button => {
        button.addEventListener("click", () => navigateTo("products"));
    });
}


// -------------------------
// 15. INITIALIZE
// -------------------------

function initializeAutoZone() {
    updateCounts();

    renderProducts(products);
    renderAllProducts(products);
    renderCart();
    renderWishlist();
    renderCheckoutSummary();

    setupForms();
    setupEvents();

    navigateTo("home");
}

document.addEventListener("DOMContentLoaded", initializeAutoZone);