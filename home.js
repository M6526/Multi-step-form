"use strict";

// Define a function to load content
function loadContent(page) {
  // Use the fetch API to load the HTML content of the requested page
  fetch(page + ".html")
    .then((response) => response.text())
    .then((html) => {
      // Update the content of the main element
      document.querySelector("main").innerHTML = html;
      // Update the URL using the pushState method of the History API
      history.pushState({ page: page }, null, page);
    });
}

// Add an event listener to the popstate event of the History API
window.addEventListener("popstate", (event) => {
  // Get the state object from the event
  const state = event.state;
  if (state) {
    // Load the content for the page specified in the state object
    loadContent(state.page);
  } else {
    // If there is no state, go back to the homepage
    loadContent("home");
  }
});

// Load the content for the current page on page load
window.addEventListener("load", () => {
  const page = window.location.pathname.slice(1, -5) || "home";
  loadContent(page);
});
