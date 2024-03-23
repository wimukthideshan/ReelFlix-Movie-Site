// Adding styles to the bottom four tiles

// Get all the square containers
const squareContainers = document.querySelectorAll(".tile");

// Loop through each square container and add event listeners
squareContainers.forEach((squareContainer) => {
  const wrapper = squareContainer.querySelector(".shown");

  squareContainer.addEventListener("mouseover", function () {
    // Apply the blur effect to the wrapper
    wrapper.style.backdropFilter = "blur(5px)";
    // Move the h4 element to the top
    this.querySelector(".shown_title").style.top = "40px";
    this.querySelector(".hidden").style.opacity = "100";
  });

  squareContainer.addEventListener("mouseout", function () {
    // Remove the blur effect from the wrapper
    wrapper.style.backdropFilter = "none";
    // Move the h4 element back to its original position
    wrapper.style.top = "0";
    this.querySelector(".shown_title").style.top = "50%";
    this.querySelector(".hidden").style.opacity = "0";
  });
});

// changing the site
// Get all the divs with the class "clickable-div"
const divs = document.querySelectorAll(".tile");

// Define a click event handler function
function handleClick(event) {
  const clickedDivId = event.currentTarget.id;

  // Redirect the user to a different site based on which div was clicked
  switch (clickedDivId) {
    case "movie":
      window.location.href = "../Shop/movie.html";
      break;
    case "anime":
      window.location.href = "../Shop/anime.html";
      break;
    case "tv":
      window.location.href = "../Shop/tv.html";
      break;
    case "cartoon":
      window.location.href = "../Shop/cartoon.html";
      break;
    default:
      break;
  }
}

// Add the click event listener to each div
divs.forEach((div) => {
  div.addEventListener("click", handleClick);
});
