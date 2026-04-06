const CURRENCY = "INR";
const CART_KEY = "cart";
const SELECTED_RESTAURANT_KEY = "restaurant";

const restaurantsData = [
  {
    id: "punjabi-tadka",
    name: "Punjabi Tadka",
    cuisine: "North Indian",
    eta: "25-35 min",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "pizza-hub",
    name: "Pizza Hub",
    cuisine: "Italian",
    eta: "20-30 min",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "sushi-wave",
    name: "Sushi Wave",
    cuisine: "Japanese",
    eta: "30-40 min",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "green-bowl",
    name: "Green Bowl",
    cuisine: "Healthy and Salads",
    eta: "15-25 min",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "spice-route",
    name: "Spice Route",
    cuisine: "Indian Fusion",
    eta: "30-45 min",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "burger-barn",
    name: "Burger Barn",
    cuisine: "Burgers and Fast Food",
    eta: "18-28 min",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
  }
];

const menuData = {
  "punjabi-tadka": [
    {
      name: "Paneer Butter Masala",
      price: 269,
      img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80",
      description: "Creamy tomato gravy with soft paneer cubes."
    },
    {
      name: "Dal Makhani",
      price: 219,
      img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
      description: "Slow-cooked black lentils finished with butter."
    },
    {
      name: "Butter Naan",
      price: 59,
      img: "https://images.unsplash.com/photo-1626500166535-0cb7fc8b6f6f?auto=format&fit=crop&w=900&q=80",
      description: "Fresh tandoor naan brushed with melted butter."
    },
    {
      name: "Mango Lassi",
      price: 129,
      img: "https://images.unsplash.com/photo-1526424382096-74a93e105682?auto=format&fit=crop&w=900&q=80",
      description: "Refreshing yogurt drink with ripe mango puree."
    }
  ],
  "pizza-hub": [
    {
      name: "Farmhouse Pizza",
      price: 339,
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
      description: "Loaded with veggies, mozzarella, and signature sauce."
    },
    {
      name: "Margherita Pizza",
      price: 279,
      img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=900&q=80",
      description: "Classic pizza with basil, tomato, and cheese."
    },
    {
      name: "Peri Peri Fries",
      price: 159,
      img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=80",
      description: "Crispy fries tossed in spicy peri peri seasoning."
    },
    {
      name: "Cold Coffee",
      price: 119,
      img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
      description: "Chilled coffee blended with milk and ice cream."
    }
  ],
  "sushi-wave": [
    {
      name: "California Roll",
      price: 349,
      img: "https://images.unsplash.com/photo-1617196038435-8c4f0f5afbd6?auto=format&fit=crop&w=900&q=80",
      description: "Crab stick, avocado, and cucumber roll."
    },
    {
      name: "Salmon Nigiri",
      price: 399,
      img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80",
      description: "Fresh salmon slices over hand-pressed rice."
    },
    {
      name: "Miso Soup",
      price: 149,
      img: "https://images.unsplash.com/photo-1582450871972-ab5ca7cfe2dd?auto=format&fit=crop&w=900&q=80",
      description: "Traditional umami-rich miso broth."
    }
  ],
  "green-bowl": [
    {
      name: "Mediterranean Bowl",
      price: 289,
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
      description: "Quinoa, hummus, chickpeas, and roasted veggies."
    },
    {
      name: "Avocado Toast",
      price: 209,
      img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=80",
      description: "Sourdough toast layered with smashed avocado."
    },
    {
      name: "Berry Smoothie",
      price: 169,
      img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=80",
      description: "Mixed berries, banana, and almond milk."
    }
  ],
  "spice-route": [
    {
      name: "Smoked Butter Chicken",
      price: 329,
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
      description: "Char-grilled chicken in smoky makhani sauce."
    },
    {
      name: "Laccha Paratha",
      price: 79,
      img: "https://images.unsplash.com/photo-1626132647523-66d4a1ec3de4?auto=format&fit=crop&w=900&q=80",
      description: "Layered flaky flatbread cooked on tawa."
    },
    {
      name: "Saffron Kheer",
      price: 139,
      img: "https://images.unsplash.com/photo-1645177628172-a94c1f96f8a1?auto=format&fit=crop&w=900&q=80",
      description: "Creamy rice pudding infused with saffron."
    }
  ],
  "burger-barn": [
    {
      name: "Double Smash Burger",
      price: 299,
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
      description: "Double beef patties, cheddar, and onion jam."
    },
    {
      name: "Crispy Chicken Burger",
      price: 279,
      img: "https://images.unsplash.com/photo-1606755962773-0d8f80de63b2?auto=format&fit=crop&w=900&q=80",
      description: "Crunchy chicken fillet with tangy slaw."
    },
    {
      name: "Loaded Nachos",
      price: 189,
      img: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?auto=format&fit=crop&w=900&q=80",
      description: "Corn chips with jalapeno, salsa, and cheese sauce."
    }
  ]
};

function goNext() {
  window.location.href = "login.html";
}

function login() {
  window.location.href = "menu.html";
}

function goBack() {
  if (window.history.length > 1) {
    window.history.back();
    return;
  }
  window.location.href = "index.html";
}

function goSignup() {
  window.location.href = "signup.html";
}

function signup() {
  window.location.href = "menu.html";
}

function orderNow() {
  window.location.href = "restaurants.html";
}

function goToCart() {
  window.location.href = "cart.html";
}

function openMenu(restaurantId) {
  localStorage.setItem(SELECTED_RESTAURANT_KEY, restaurantId);
  window.location.href = "restaurant-menu.html";
}

function getRestaurantById(restaurantId) {
  return restaurantsData.find((restaurant) => restaurant.id === restaurantId);
}

function getSelectedRestaurant() {
  const selectedId = localStorage.getItem(SELECTED_RESTAURANT_KEY);
  return selectedId ? getRestaurantById(selectedId) : null;
}

function getCart() {
  const cart = JSON.parse(localStorage.getItem(CART_KEY));
  return cart && typeof cart === "object" ? cart : {};
}

function setCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function formatAmount(value) {
  return `${CURRENCY} ${value}`;
}

function showToast(message, type = "success") {
  const toastContainer = document.getElementById("toast-container");
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 250);
  }, 2300);
}

function ensureToastContainer() {
  if (document.getElementById("toast-container")) return;

  const container = document.createElement("div");
  container.id = "toast-container";
  container.className = "toast-container";
  document.body.appendChild(container);
}

function updateCartCount() {
  const countEl = document.getElementById("cart-count");
  if (!countEl) return;

  const count = Object.values(getCart()).reduce((sum, item) => sum + item.qty, 0);
  countEl.textContent = String(count);
}

function renderRestaurants() {
  const restaurantList = document.getElementById("restaurant-list");
  if (!restaurantList) return;

  restaurantList.innerHTML = "";

  restaurantsData.forEach((restaurant) => {
    const card = document.createElement("button");
    card.className = "food-card";
    card.type = "button";
    card.addEventListener("click", () => openMenu(restaurant.id));

    card.innerHTML = `
      <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-img">
      <div class="restaurant-info">
        <h3>${restaurant.name}</h3>
        <p>${restaurant.cuisine}</p>
        <p class="meta">Rating ${restaurant.rating} · ${restaurant.eta}</p>
      </div>
    `;

    restaurantList.appendChild(card);
  });
}

function loadRestaurantMenu() {
  const title = document.getElementById("restaurant-name");
  const subtitle = document.getElementById("restaurant-subtitle");
  const menuContainer = document.getElementById("menu-container");
  if (!title || !menuContainer) return;

  const restaurant = getSelectedRestaurant();
  if (!restaurant || !menuData[restaurant.id]) {
    title.innerText = "No Restaurant Selected";
    if (subtitle) {
      subtitle.innerText = "Please choose a restaurant to see its menu.";
    }
    menuContainer.innerHTML = '<p class="empty-state soft">Please choose a restaurant first.</p>';
    return;
  }

  title.innerText = restaurant.name;
  if (subtitle) {
    subtitle.innerText = `${restaurant.cuisine} · ${restaurant.eta} · Rating ${restaurant.rating}`;
  }
  menuContainer.innerHTML = "";

  menuData[restaurant.id].forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.className = "food-card menu-card";

    itemCard.innerHTML = `
      <img src="${item.img}" alt="${item.name}" class="food-img">
      <div class="food-info">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p class="food-price">${formatAmount(item.price)}</p>
        <button type="button" class="primary-btn add-item-btn">Add to Cart</button>
      </div>
    `;

    const addBtn = itemCard.querySelector(".add-item-btn");
    addBtn.addEventListener("click", () => {
      addToCart(restaurant.id, item);
    });

    menuContainer.appendChild(itemCard);
  });
}

function addToCart(restaurantId, item) {
  const cart = getCart();
  const key = `${restaurantId}|${item.name}`;
  const restaurant = getRestaurantById(restaurantId);

  if (!cart[key]) {
    cart[key] = {
      name: item.name,
      restaurant: restaurant ? restaurant.name : "Unknown Restaurant",
      price: item.price,
      img: item.img,
      qty: 0
    };
  }

  cart[key].qty += 1;
  setCart(cart);
  updateCartCount();
  showToast(`${item.name} added to cart`);
}

function updateQuantity(key, delta) {
  const cart = getCart();
  if (!cart[key]) return;

  cart[key].qty += delta;
  if (cart[key].qty <= 0) {
    delete cart[key];
  }

  setCart(cart);
  updateCartCount();
  renderCart();
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartCount();
  renderCart();
  showToast("Cart cleared", "info");
}

function checkoutCart() {
  const itemCount = Object.values(getCart()).reduce((sum, item) => sum + item.qty, 0);
  if (itemCount === 0) {
    showToast("Your cart is empty", "warning");
    return;
  }

  showToast(`Order placed for ${itemCount} items!`, "success");
  localStorage.removeItem(CART_KEY);
  renderCart();
  updateCartCount();
}

function renderCart() {
  const list = document.getElementById("cart-items");
  const totalBox = document.getElementById("cart-total");
  if (!list || !totalBox) return;

  const cart = getCart();
  const items = Object.entries(cart);

  if (items.length === 0) {
    list.innerHTML = '<li class="empty-state soft">Your cart is empty.</li>';
    totalBox.innerText = `Total: ${formatAmount(0)}`;
    return;
  }

  let total = 0;
  list.innerHTML = "";

  items.forEach(([key, data]) => {
    const itemTotal = data.price * data.qty;
    total += itemTotal;

    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `
      <img src="${data.img}" alt="${data.name}" class="cart-thumb">
      <div>
        <strong>${data.name}</strong>
        <p>${data.restaurant}</p>
        <p>${formatAmount(data.price)} each</p>
      </div>
      <div class="qty-controls">
        <button type="button" class="qty-btn" aria-label="Decrease quantity">-</button>
        <span>${data.qty}</span>
        <button type="button" class="qty-btn" aria-label="Increase quantity">+</button>
      </div>
      <strong>${formatAmount(itemTotal)}</strong>
    `;

    const buttons = li.querySelectorAll(".qty-btn");
    buttons[0].addEventListener("click", () => updateQuantity(key, -1));
    buttons[1].addEventListener("click", () => updateQuantity(key, 1));

    list.appendChild(li);
  });

  totalBox.innerText = `Total: ${formatAmount(total)}`;
}

function runAppTests() {
  const backupCart = localStorage.getItem(CART_KEY);
  const backupRestaurant = localStorage.getItem(SELECTED_RESTAURANT_KEY);
  const results = [];

  try {
    localStorage.removeItem(CART_KEY);
    localStorage.setItem(SELECTED_RESTAURANT_KEY, "pizza-hub");

    results.push({
      name: "Currency formatting",
      pass: formatAmount(120) === "INR 120"
    });

    const pizza = menuData["pizza-hub"][0];
    addToCart("pizza-hub", pizza);
    addToCart("pizza-hub", pizza);

    const cart = getCart();
    const key = `pizza-hub|${pizza.name}`;
    results.push({
      name: "Add to cart increments quantity",
      pass: cart[key] && cart[key].qty === 2
    });

    updateQuantity(key, -1);
    const updated = getCart();
    results.push({
      name: "Decrease quantity works",
      pass: updated[key] && updated[key].qty === 1
    });

    clearCart();
    results.push({
      name: "Clear cart empties data",
      pass: Object.keys(getCart()).length === 0
    });

    const passed = results.filter((result) => result.pass).length;
    return {
      passed,
      total: results.length,
      results
    };
  } finally {
    if (backupCart === null) {
      localStorage.removeItem(CART_KEY);
    } else {
      localStorage.setItem(CART_KEY, backupCart);
    }

    if (backupRestaurant === null) {
      localStorage.removeItem(SELECTED_RESTAURANT_KEY);
    } else {
      localStorage.setItem(SELECTED_RESTAURANT_KEY, backupRestaurant);
    }
  }
}

function renderTestResults() {
  const output = document.getElementById("test-results");
  if (!output) return;

  const report = runAppTests();
  output.innerHTML = "";

  const summary = document.createElement("p");
  summary.className = "test-summary";
  summary.textContent = `${report.passed}/${report.total} tests passed`;
  output.appendChild(summary);

  report.results.forEach((test) => {
    const line = document.createElement("p");
    line.className = test.pass ? "test-pass" : "test-fail";
    line.textContent = `${test.pass ? "PASS" : "FAIL"}: ${test.name}`;
    output.appendChild(line);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  ensureToastContainer();
  renderRestaurants();
  loadRestaurantMenu();
  renderCart();
  updateCartCount();
});

 