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
      title: "One Punch Man",
      image: "../src/images/Shop/anime/onePunchMan.jpg",
      time: "2015",
      Count: "2 Seasons",
      price: 12.0,
    },
    {
      title: "Naruto",
      image: "../src/images/Shop/anime/Naruto.jpg",
      Count: "5 Seasons",
      time: "2002",
      price: 21.0,
    },
    {
      title: "Bleach",
      image: "../src/images/Shop/anime/bleach.jpg",
      time: "2004",
      Count: "16 Seasons",
      price: 20.0,
    },
    {
      title: "Jujutsu Kaisen",
      image: "../src/images/Shop/anime/jujutsu kaisen.jpg",
      time: "2020",
      Count: "2 Seasons",
      price: 23.0,
    },
    {
      title: "Owari No Seraph",
      image: "../src/images/Shop/anime/owari no seraph.jpg",
      time: "2015",
      Count: "2 Seasons",
      price: 22.0,
    },
    {
      title: "Sword Art Online",
      image: "../src/images/Shop/anime/Sword art Online.jpg",
      time: "2012",
      Count: "3 Seasons",
      price: 20.0,
    },
    {
      title: "Death Note",
      image: "../src/images/Shop/anime/death note.jpg",
      time: "2006",
      Count: "1 Season",
      price: 20.0,
    },
    {
      title: "Berserk",
      image: "../src/images/Shop/anime/Berserker.jpg",
      time: "1997",
      Count: "1 Season",
      price: 20.0,
    },
    {
      title: "Demon Slayer",
      image: "../src/images/Shop/anime/demon slayer.jpg",
      time: "2020",
      Count: "3 Seasons",
      price: 20.0,
    },
    {
      title: "One Piece",
      image: "../src/images/Shop/anime/onePiece.jpg",
      time: "1996",
      Count: "20",
      price: 45.0,
    },
    {
      title: "Fate",
      image: "../src/images/Shop/anime/fate.png",
      time: "2006",
      Count: "6 Seasons",
      price: 30.0,
    },
    {
      title: "Seven Deadly Sins",
      image: "../src/images/Shop/anime/seven deadly sins.jpg",
      time: "2014",
      Count: "4 Seasons",
      price: 12.0,
    },
    {
      title: "Heavenly Delusion",
      image: "../src/images/Shop/anime/Heavenly.jpg",
      time: "2023",
      Count: "1 Season",
      price: 11.0,
    },
    {
      title: "Jobless Reincarnation",
      image: "../src/images/Shop/anime/Jobless reincarnation.jpg",
      time: "2021",
      Count: "3 Seasons",
      price: 21.0,
    },
    {
      title: "Tensura",
      image: "../src/images/Shop/anime/Tensura.jpeg",
      time: "2021",
      Count: "2 Seasons",
      price: 20.0,
    },
    {
      title: "No Game No Life",
      image: "../src/images/Shop/anime/no game no life.jpg",
      time: "2014",
      Count: "2 Seasons",
      price: 10.0,
    },
    {
      title: "Darling In The Franxx",
      image: "../src/images/Shop/anime/darling in the franxx.png",
      time: "2018",
      Count: "1 Season",
      price: 5.0,
    },
    {
      title: "Cowboy Bebop",
      image: "../src/images/Shop/anime/Cowboy bebop.jpg",
      time: "1998",
      Count: "1 Season",
      price: 13.0,
    },
    {
      title: "Chainsaw Man",
      image: "../src/images/Shop/anime/chainsawMan.jpg",
      time: "2023",
      Count: "1 Seasons",
      price: 8.0,
    },
    {
      title: "Pokemon",
      image: "../src/images/Shop/anime/Pokemon.jpg",
      time: "19997",
      Count: "2002 Seasons",
      price: 22.0,
    },
    {
      title: "Dragon ball",
      image: "../src/images/Shop/anime/Dragon ball.jpg",
      time: "1989",
      Count: "9 Seasons",
      price: 26.0,
    },
    {
      title: "Attack on Titan",
      image: "../src/images/Shop/anime/attack on titan.jpg",
      time: "2013",
      Count: "4 Seasons",
      price: 40.0,
    },
    {
      title: "Tokyo Ghoul",
      image: "../src/images/Shop/anime/tokyogoul.jpg",
      time: "2014",
      Count: "2 Seasons",
      price: 10.0,
    },
    {
      title: "Naruto Shippuden",
      image: "../src/images/Shop/anime/Naruto Shippuden.jpg",
      time: "2007",
      Count: "21 Seasons",
      price: 35.0,
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
