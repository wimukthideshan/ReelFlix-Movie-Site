// new code
document.addEventListener("DOMContentLoaded", function () {
  // Your existing code to add "active" class to the current page link
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".gallery ul li a");

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Array to hold the products data
  let products = [
    {
      title: "The BatMan",
      image: "../src/images/Shop/cartoon/BatMan.webp",
      time: "2004",
      Count: "5 Seasons",
      Genre: "Adventure",
      price: 19.99,
    },
    {
      title: "BEN 10",
      image: "../src/images/Shop/cartoon/Ben10.jpg",
      time: "2005",
      Count: "4 Seasons",
      Genre: "Sci-fi",
      price: 21.0,
    },
    {
      title: "The Bugs Bunny Show",
      image: "../src/images/Shop/cartoon/BugsBunny.jpg",
      time: "1960",
      Count: "27 Seasons",
      Genre: "Comedy",
      price: 24.0,
    },
    {
      title: "Dennis The Menace",
      image: "../src/images/Shop/cartoon/DennistheMenace.jpg",
      time: "1986",
      Count: "2 Seasons",
      Genre: "Comedy",
      price: 25.0,
    },
    {
      title: "Family Guy",
      image: "../src/images/Shop/cartoon/FamilyGuy.jpg",
      time: "1999",
      Count: "22 Seasons",
      Genre: "Sitcom",
      price: 30.0,
    },
    {
      title: "Gnerator Rex",
      image: "../src/images/Shop/cartoon/GeneratorRex.jpg",
      time: "2010",
      Count: "3 Seasons",
      Genre: "Sci-fi",
      price: 40.0,
    },
    {
      title: "Invincible",
      image: "../src/images/Shop/cartoon/Invincible-poster.jpg",
      time: "2021",
      Count: "1 Season",
      Genre: "Action Fiction",
      price: 10.0,
    },
    {
      title: "Jakie Chan Adventures",
      image: "../src/images/Shop/cartoon/JakieCHanAdventures.jpg",
      time: "2000",
      Count: "5 Seasons",
      Genre: "Adventure",
      price: 30.0,
    },
    {
      title: "Kissy Fur",
      image: "../src/images/Shop/cartoon/KissyFur.jpg",
      time: "1986",
      Count: "2 Seasons",
      Genre: "Crime, Drama",
      price: 16.0,
    },
    {
      title: "Oggy And the Cockoaches",
      image: "../src/images/Shop/cartoon/Oggy.jpg",
      time: "1998",
      Count: "8 Seasons",
      Genre: "Comedy",
      price: 28.0,
    },
    {
      title: "The Pink Panther Sow",
      image: "../src/images/Shop/cartoon/PinkPanther.jpg",
      time: "1969",
      Count: "10 Seasons",
      Genre: "Comedy",
      price: 27.0,
    },
    {
      title: "Power Puff Girls",
      image: "../src/images/Shop/cartoon/PowerPuffGirls.jpg",
      time: "1998",
      Count: "6 Seasons",
      Genre: "Family",
      price: 18.0,
    },
    {
      title: "The Road Runner Show",
      image: "../src/images/Shop/cartoon/RoadRunner.jpg",
      time: "1996",
      Count: "3 Seasons",
      Genre: "Anthology Series",
      price: 10.0,
    },
    {
      title: "Sonic The Hedgehog",
      image: "../src/images/Shop/cartoon/Sonic.jpg",
      time: "1993",
      Count: "2 Seasons",
      Genre: "Sci-fi",
      price: 17.0,
    },
    {
      title: "The Flintstones",
      image: "../src/images/Shop/cartoon/TheFlintstones.jpg",
      time: "1960",
      Count: "6 Seasons",
      Genre: "Family, Comedy",
      price: 26.0,
    },
    {
      title: "The Simpsons",
      image: "../src/images/Shop/cartoon/TheSimpsons.jpg",
      time: "1989",
      Count: "35 Seasons",
      Genre: "Sitcom",
      price: 56.0,
    },
    {
      title: "ThunderCats",
      image: "../src/images/Shop/cartoon/Thundercats.jpg",
      time: "1985",
      Count: "2 Seasons",
      Genre: "Adventure",
      price: 13.0,
    },
  ];

  // Function to save the cart data to local storage
  function saveCartToLocalStorage(cartData) {
    localStorage.setItem("cart", JSON.stringify(cartData));
  }

  // Create and populate HTML elements for each product in the JSON
  products.forEach((product) => {
    // Create product element
    const productContainer = document.createElement("div");
    productContainer.classList.add("product");

    // Populate the product element with data from the JSON
    const { title, image, price, time, Count, key } = product;
    productContainer.innerHTML = `
      <div class="imagePart">
        <img src="${image}" alt="${title}" class="image" />
        <div class="imgBottom">
          <div class="imgTagLeft">
            <h2 class="title">${title}</h2>
            <p class="realese_data">${time}</p>
            <p class="epiCount">${Count}</p>
          </div>
          <div class="imgTagRight">
            <p class="price">$ ${price.toFixed(2)}</p>
            <button class="btn" onclick="addToCartHandler()">Add to cart</button>
          </div>
        </div>
      </div>
    `;

    // Append the product element to the page
    document.querySelector(".products").appendChild(productContainer);
  });

  // Function to fetch cart data from local storage
  function getCartFromLocalStorage() {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  }

  // Function to handle "Add to cart" button click
  function addToCartHandler(event) {
    // Get the parent product container element
    const productContainer = event.target.closest(".product");

    // Retrieve the product data from the container
    const title = productContainer.querySelector(".title").textContent;
    const image = productContainer.querySelector(".image").getAttribute("src");
    const price = parseFloat(
      productContainer.querySelector(".price").textContent.replace("$", "")
    );

    // Create an object representing the product
    const productData = {
      title,
      image,
      price,
    };

    // Fetch the existing cart data from local storage
    const cartData = getCartFromLocalStorage();

    // Check if the product is already in the cart (based on a unique identifier, e.g., product title)
    const existingCartItem = cartData.find(
      (item) => item.title === productData.title
    );

    if (existingCartItem) {
      // If the product is already in the cart, update its quantity instead of adding a new entry
      existingCartItem.quantity += 1;
    } else {
      // If the product is not in the cart, add it as a new item
      productData.quantity = 1;
      cartData.push(productData);
    }

    // Update the cart icon quantity display
    document.querySelector(".quantity").textContent = cartData.length;

    // Save the cart data to local storage
    saveCartToLocalStorage(cartData);
    console.log("Saved to local storage");
  }

  // Get all the "Add to cart" buttons and attach the click event listener
  const addToCartButtons = document.querySelectorAll(".btn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", addToCartHandler);
  });
});
