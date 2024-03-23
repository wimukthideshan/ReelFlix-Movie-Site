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
      title: "Game of Thrones",
      image: "../src/images/Shop/tvshows/game of thrones.jpg",
      time: "2011",
      Count: "8 Seasons",
      Genre: "Fantasy, Drama",
      price: 10.0,
    },
    {
      title: "Breaking Bad",
      image: "../src/images/Shop/tvshows/breaking bad.jpg",
      time: "2008",
      Count: "5 Seasons",
      Genre: "Crime, Drama",
      price: 25.99,
    },
    {
      title: "Friends",
      image: "../src/images/Shop/tvshows/friends.jpg",
      time: "1994",
      Count: "10 Seasons",
      Genre: "Sitcom",
      price: 30.0,
    },
    {
      title: "Stranger Things",
      image: "../src/images/Shop/tvshows/Stranger Things.jpg",
      time: "2016",
      Count: "4 Seasons",
      Genre: "Science Fiction, Horror",
      price: 22.0,
    },
    {
      title: "The Office",
      image: "../src/images/Shop/tvshows/the office.jpg",
      time: "2005",
      Count: "9 Seasons",
      Genre: "Mockumentary, Comedy",
      price: 23.0,
    },
    {
      title: "The Crown",
      image: "../src/images/Shop/tvshows/The Crown.jpg",
      time: "2016",
      Count: "5 Seasons",
      Genre: "Historical, Drama",
      price: 21.0,
    },
    {
      title: "Sherlock",
      image: "../src/images/Shop/tvshows/Sherlock.jpg",
      time: "2010",
      Count: "2 Seasons",
      Genre: "Crime, Drama",
      price: 24.0,
    },
    {
      title: "Black Mirror",
      image: "../src/images/Shop/tvshows/black mirror.jpg",
      time: "2011",
      Count: "6 Seasons",
      Genre: "Anthology, Sci-Fi",
      price: 20.0,
    },
    {
      title: "The Big Bang Theory",
      image: "../src/images/Shop/tvshows/Big bang theory.jpg",
      time: "2007",
      Count: "12 Seasons",
      Genre: "Sitcom",
      price: 20.0,
    },
    {
      title: "Mindhunter",
      image: "../src/images/Shop/tvshows/mindhunter.jpg",
      time: "2017",
      Count: "2 Seasons",
      Genre: "Crime, Drama",
      price: 20.0,
    },
    {
      title: "Narcos",
      image: "../src/images/Shop/tvshows/narcos.jpg",
      time: "2015",
      Count: "2 Seasons",
      Genre: "Crime, Drama",
      price: 11.0,
    },
    {
      title: "The Walking Dead",
      image: "../src/images/Shop/tvshows/the walking dead.jpg",
      time: "2010",
      Count: "11 Seasons",
      Genre: "Horror, Drama",
      price: 12.0,
    },
    {
      title: "Money Heist",
      image: "../src/images/Shop/tvshows/money hist.jpg",
      time: "2017",
      Count: "5 Seasons",
      Genre: "Crime, Drama",
      price: 24.0,
    },
    {
      title: "The Mandalorian",
      image: "../src/images/Shop/tvshows/the mandalorian.jpg",
      time: "2019",
      Count: "3 Seasons",
      Genre: "Science Fiction, Adventure",
      price: 13.0,
    },
    {
      title: "The Simpsons",
      image: "../src/images/Shop/tvshows/the simpsons.jpg",
      time: "1989",
      Count: "35 Seasons",
      Genre: "Animation, Sitcom",
      price: 12.0,
    },
    {
      title: "WestWorld",
      image: "../src/images/Shop/tvshows/westworld.jpg",
      time: "2016",
      Count: "3 Seasons",
      Genre: "Science Fiction, Drama",
      price: 22.0,
    },
    {
      title: "Peaky Blinders",
      image: "../src/images/Shop/tvshows/peaky blinders.jpg",
      time: "2013",
      Count: "6 Seasons",
      Genre: "Crime, Drama",
      price: 26.0,
    },
    {
      title: "The Witcher",
      image: "../src/images/Shop/tvshows/the witcher.jpg",
      time: "2019",
      Count: "3 Seasons",
      Genre: "Fantasy, Drama",
      price: 23.0,
    },
    {
      title: "Brooklyn Nine-Nine",
      image: "../src/images/Shop/tvshows/brooklyn nine nine.jpg",
      time: "2013",
      Count: "8 Seasons",
      Genre: "Sitcom, Comedy",
      price: 30.0,
    },
    {
      title: "The Good Place",
      image: "../src/images/Shop/tvshows/the good place.jpg",
      time: "2016",
      Count: "4 Seasons",
      Genre: "Comedy, Fantasy",
      price: 26.0,
    },
    {
      title: "Homeland",
      image: "../src/images/Shop/tvshows/homeland.jpg",
      time: "2011",
      Count: "8 Seasons",
      Genre: "Drama, Thriller",
      price: 21.0,
    },
    {
      title: "True Detective",
      image: "../src/images/Shop/tvshows/true detective.jpg",
      time: "2014",
      Count: "3 Seasons",
      Genre: "Crime, Drama",
      price: 22.0,
    },
    {
      title: "Better Call Saul",
      image: "../src/images/Shop/tvshows/better call saul.jpg",
      time: "2015",
      Count: "6 Seasons",
      Genre: "Crime, Drama",
      price: 24.0,
    },
    {
      title: "Downton Abbey",
      image: "../src/images/Shop/tvshows/Downton Abbey.jpg",
      time: "2010",
      Count: "6 Seasons",
      Genre: "Historical, Drama",
      price: 10.0,
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
