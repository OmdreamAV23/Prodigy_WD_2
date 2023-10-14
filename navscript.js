// Get the navbar element by its ID
let navbar = document.getElementById("navbar");

// Listen for scroll events
window.onscroll = function() {

  // Check if the page has been scrolled down more than 20 pixels
  if (window.pageYOffset > 20) {
    // If so, change the navbar's background color to blue
    navbar.style.backgroundColor = "blue";
  } else {
    // Otherwise, change the navbar's background color to light blue
    navbar.style.backgroundColor = "#0077b5";
  }
}
