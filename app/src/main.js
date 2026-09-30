import "./style.css";
console.log("test");
const products = [
  {
    name: "Blue Runner Sneakers",
    category: "shoes",
    price: 89.99,
    image: "/img/blue-sneaker.avif",
    alt: "Blue athletic sneakers",
    popularity: 8420,
  },
  {
    name: "Brown Leather Sneakers",
    category: "shoes",
    price: 109.99,
    image: "/img/brown-sneaker.avif",
    alt: "Brown leather sneakers",
    popularity: 8421,
  },
  {
    name: "Red Nike Sneakers",
    category: "shoes",
    price: 99.99,
    image: "/img/red-sneaker.jpg",
    alt: "Red Nike sneakers",
    popularity: 9870,
  },
  {
    name: "Designer Jeans",
    category: "pants",
    price: 129.99,
    image: "/img/jeans.avif",
    alt: "Designer denim jeans",
    popularity: 6230,
  },
  {
    name: "Performance Workout Pants",
    category: "pants",
    price: 79.99,
    image: "/img/workout pants.avif",
    alt: "Workout pants in black fabric",
    popularity: 4890,
  },
  {
    name: "Yoga Flex Pants",
    category: "pants",
    price: 69.99,
    image: "/img/yoga pants.avif",
    alt: "Yoga pants for comfort and flexibility",
    popularity: 2340,
  },
  {
    name: "Classic White Shirt",
    category: "shirts",
    price: 49.99,
    image: "/img/shirts1.avif",
    alt: "Classic white shirt",
    popularity: 7760,
  },
  {
    name: "Blue Casual Shirt",
    category: "shirts",
    price: 54.99,
    image: "/img/shirts2.avif",
    alt: "Blue casual shirt",
    popularity: 5120,
  },
  {
    name: "Graphic Tee Shirt",
    category: "shirts",
    price: 39.99,
    image: "/img/shirts3.avif",
    alt: "Graphic tee shirt",
    popularity: 11300,
  },
  {
    name: "Plaid Button-down Shirt",
    category: "shirts",
    price: 59.99,
    image: "/img/shirts4.avif",
    alt: "Plaid button-down shirt",
    popularity: 1890,
  },

  // 🔥 New additions
  {
    name: "Slim Fit Black Shirt",
    category: "shirts",
    price: 57.99,
    image: "/img/shirts5.avif",
    alt: "Slim fit black dress shirt",
    popularity: 3670,
  },
  {
    name: "Striped Polo Shirt",
    category: "shirts",
    price: 44.99,
    image: "/img/shirts6.avif",
    alt: "Striped polo shirt",
    popularity: 2980,
  },
  {
    name: "Casual Sweatpants",
    category: "pants",
    price: 74.99,
    image: "/img/sweatpants.avif",
    alt: "Comfortable casual sweatpants",
    popularity: 6540,
  },
  {
    name: "White Sneaker Classic",
    category: "shoes",
    price: 92.99,
    image: "/img/white-sneaker.avif",
    alt: "Classic white sneakers",
    popularity: 9120,
  },
  {
    name: "Luxury Gold Watch",
    category: "watches",
    price: 249.99,
    image: "/img/watches1.avif",
    alt: "Luxury gold wristwatch",
    popularity: 4230,
  },
  {
    name: "Silver Steel Watch",
    category: "watches",
    price: 199.99,
    image: "/img/watches2.avif",
    alt: "Silver steel wristwatch",
    popularity: 5880,
  },
  {
    name: "Leather Strap Watch",
    category: "watches",
    price: 179.99,
    image: "/img/watches3.avif",
    alt: "Leather strap wristwatch",
    popularity: 3340,
  },
  {
    name: "Modern Minimal Watch",
    category: "watches",
    price: 159.99,
    image: "/img/watches4.avif",
    alt: "Minimal modern wristwatch",
    popularity: 7090,
  },
  {
    name: "Sport Digital Watch",
    category: "watches",
    price: 139.99,
    image: "/img/watches5.avif",
    alt: "Sport style digital watch",
    popularity: 8650,
  },
];
// Selection sort — sorts descending by popularity (highest sales first)
function selectionSort(arr) {
  const sorted = [...arr];
  for (let i = 0; i < sorted.length; i++) {
    let maxIdx = i;
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[j].popularity > sorted[maxIdx].popularity) {
        maxIdx = j;
      }
    }
    if (maxIdx !== i) {
      [sorted[i], sorted[maxIdx]] = [sorted[maxIdx], sorted[i]];
    }
  }
  return sorted;
}

// Render top 5 selling products
const topSelling = selectionSort(products).slice(0, 5);
const topSellingContainer = document.querySelector(".top-selling-container");

topSelling.forEach((item, index) => {
  topSellingContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="top-selling-card">
      <span class="rank-badge">#${index + 1}</span>
      <img src="${item.image}" alt="${item.alt}" />
      <div class="top-selling-info">
        <h3>${item.name}</h3>
        <p class="top-selling-price">$${item.price.toFixed(2)}</p>
        <p class="top-selling-sales">${item.popularity.toLocaleString()} sold</p>
      </div>
    </div>
    `,
  );
});

//Put Cards on screen
const container = document.querySelector(".card-container");

products.forEach((item) => {
  //can show them this if they have data tpe issues
  /* const price =
    typeof item.price === "number" ? item.price.toFixed(2) : item.price; */

  container.insertAdjacentHTML(
    "beforeend",
    `
      <div class="product-card card bg-base-200 w-96 shadow-sm my-12 h-[550px]" data-category="${
        item.category
      }" data-title="${item.name}">
        <figure>
          <img
            class="w-full h-80 overflow-hidden object-cover"
            src="${item.image}"
            alt="${item.alt}"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${item.name}</h2>
          <p>$${item.price.toFixed(2)}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary add">Add To Cart</button>
          </div>
        </div>
      </div>
      `,
  );
});

// step 2 select the filters
const filterButtons = {
  all: document.querySelector('[data-category="all"]'),
  shoes: document.querySelector('[data-category="shoes"]'),
  pants: document.querySelector('[data-category="pants"]'),
  shirts: document.querySelector('[data-category="shirts"]'),
  watches: document.querySelector('[data-category="watches"]'),
};

//Show them logging the clicked button
/* Object.values(filterButtons).forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.textContent);
  });
});
 */

const cards = document.querySelectorAll(".product-card");
Object.values(filterButtons).forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedCategory = event.target.textContent.toLowerCase();
    console.log(selectedCategory);
    cards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");
      console.log(cardCategory);
      if (selectedCategory === "all" || cardCategory === selectedCategory) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});

//add to da cart
const cart = [];
function showToast(message) {
  const toastContainer = document.getElementById("toast-container");
  if (!toastContainer) return;

  const toastEl = document.createElement("div");
  toastEl.className = "toast";
  toastEl.innerHTML = `
      <div class="alert alert-info">
        <span>${message}</span>
      </div>
    `;

  // Insert and then remove after 2 seconds
  toastContainer.appendChild(toastEl);

  setTimeout(() => {
    toastEl.remove();
  }, 2000);
}
function showCart(item) {
  const cartElement = document.getElementById("cart");
  if (cartElement.classList.contains("hidden")) {
    cartElement.classList.remove("hidden");
  }
  const tableBody = document.querySelector(".table-body");
  tableBody.insertAdjacentHTML(
    "beforeend",
    ` <tr>
        <td>${item.name}</td>
        <td class="text-right">$${item.price.toFixed(2)}</td>
      </tr>
    `,
  );
}
function totalCart(cart) {
  let total = 0;
  cart.forEach((item) => (total += item.price));

  document.getElementById("Subtotal").textContent = total.toFixed(2);
  document.getElementById("item-amt").textContent = ` ${cart.length} Items`;
}

document.querySelectorAll(".add").forEach((button) => {
  button.addEventListener("click", (event) => {
    //console.log(event.target.closest(".card").getAttribute("data-title"));
    const selectedProduct = event.target
      .closest(".card")
      .getAttribute("data-title");
    const productObj = products.find((prod) => prod.name === selectedProduct);
    //console.log(productObj);
    cart.push(productObj);
    console.log(cart);
    showToast(`${productObj.name} added to cart`);
    showCart(productObj);
    totalCart(cart);
  });
});
