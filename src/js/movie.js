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
      title: "Interstellar",
      image: "../src/images/Shop/movies/Interstellar.jpg",
      time: "2014",
      Genre: "Sci-Fi, Drama",
      price: 33.0,
    },
    {
      title: "Tenet",
      image: "../src/images/Shop/movies/tenet.jpg",
      Genre: "Action, Sci-fi",
      time: "2020",
      price: 32.0,
    },
    {
      title: "The Godfather",
      image: "../src/images/Shop/movies/the godfather.jpg",
      time: "1972",
      Genre: "Crime, Drama",
      price: 36.0,
    },
    {
      title: "The Dark Knight",
      image: "../src/images/Shop/movies/dark knight.jpg",
      time: "2008",
      Genre: "Action, Crime",
      price: 37.0,
    },
    {
      title: "Inception",
      image: "../src/images/Shop/movies/Inception.jpg",
      time: "2010",
      Genre: "Sci-Fi, Thriller",
      price: 42.0,
    },
    {
      title: "Topgun",
      image: "../src/images/Shop/movies/Topgun.jpg",
      time: "1986",
      Genre: "Action, Drama",
      price: 12.0,
    },
    {
      title: "Godzilla",
      image: "../src/images/Shop/movies/Godzilla.jpg",
      time: "2014",
      Genre: "Sci-Fi, Action",
      price: 8.0,
    },
    {
      title: "Godzilla: King of the Monsters",
      image: "../src/images/Shop/movies/Godzilla 2.jpg",
      time: "2019",
      Genre: "Sci-Fi, Action",
      price: 13.0,
    },
    {
      title: "Godzilla vs Kong",
      image: "../src/images/Shop/movies/Godzilla vs Kong.jpg",
      time: "2021",
      Genre: "Sci-Fi, Action",
      price: 14.0,
    },
    {
      title: "Terminator",
      image: "../src/images/Shop/movies/Terminator.jpg",
      time: "1984",
      Genre: "Sci-Fi, Action",
      price: 14.2,
    },
    {
      title: "San Andreas",
      image: "../src/images/Shop/movies/san andreas.jpg",
      time: "2015",
      Genre: "Action, Adevnture",
      price: 13.0,
    },
    {
      title: "Rampage",
      image: "../src/images/Shop/movies/Rampage.jpg",
      time: "2018",
      Genre: "Action, Adevnture",
      price: 10.0,
    },
    {
      title: "Gravity",
      image: "../src/images/Shop/movies/gravity.jpg",
      time: "2013",
      Genre: "Sci-Fi, Thriller",
      price: 18.0,
    },
    {
      title: "Moon Fall",
      image: "../src/images/Shop/movies/moon fall.jpg",
      time: "2022",
      Genre: "Sci-Fi, Action",
      price: 21.0,
    },
    {
      title: "The Matrix",
      image: "../src/images/Shop/movies/the matrix.jpg",
      time: "1999",
      Genre: "Sci-Fi, Action",
      price: 20.0,
    },
    {
      title: "Fight Club",
      image: "../src/images/Shop/movies/fight club.jpg",
      time: "1999",
      Genre: "Drama, Thriller",
      price: 34.0,
    },
    {
      title: "Schindler's List",
      image: "../src/images/Shop/movies/schindler list.jpg",
      time: "1993",
      Genre: "Historical, Drama",
      price: 33.0,
    },
    {
      title: "Forrest Gump",
      image: "../src/images/Shop/movies/forrest gump.jpg",
      time: "1994",
      Genre: "Drama, Comedy",
      price: 21.0,
    },
    {
      title: "The Lord of the Rings",
      image: "../src/images/Shop/movies/lord of the rings.jpg",
      time: "2001",
      Genre: "Fantasy, Adventure",
      price: 24.0,
    },
    {
      title: "The Social Network",
      image: "../src/images/Shop/movies/social network.jpg",
      time: "2010",
      Genre: "Drama, Biography",
      price: 24.0,
    },
    {
      title: "Whiplash",
      image: "../src/images/Shop/movies/whiplash.jpg",
      time: "2014",
      Genre: "Drama, Music",
      price: 23.0,
    },
    {
      title: "The Departed",
      image: "../src/images/Shop/movies/the departed.jpg",
      time: "2006",
      Genre: "Crime, Thriller",
      price: 25.0,
    },
    {
      title: "The Prestige",
      image: "../src/images/Shop/movies/the Prestige.jpg",
      time: "2006",
      Genre: "Mystery, Drama",
      price: 13.0,
    },
    {
      title: "The Lion King",
      image: "../src/images/Shop/movies/Lion king.jpg",
      time: "1994",
      Genre: "Animation, Adventure",
      price: 12.0,
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
