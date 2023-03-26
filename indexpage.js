"use strict";
// let currentPage = window.location.pathname;

// function goBack() {
//   window.history.back();
// }

// function goForward() {
//   var currentPage = window.location.pathname;
//   var nextPage = getNextPage(currentPage);
//   window.history.pushState(null, null, nextPage);
//   window.location.replace(nextPage);
// }

// function getNextPage(currentPage) {
//   define your page routing logic here
//   return the URL of the next page to navigate to
//   Load the initial page
//   loadPage(currentPage);

//   Add event listeners for the "back" and "next" buttons
//     btnBack.addEventListener("click", function () {
//       if (currentPage > 1) {
//         currentPage--;
//         loadPage(currentPage);
//       }
//     });

//   btnNext.addEventListener("click", function () {
//     if (currentPage < pages.length) {
//       currentPage++;
//       loadPage(currentPage);
//     }
//   });
//   loadPage("page-content-1");
//   let currentUrl = function () {
//     return window.location.href();
//   };
// }
// getNextPage();

// Get the buttons that will trigger the page updates
// const homeButton = document.getElementById("#next-btn");
// const backButton = document.getElementById("#back-btn");
// const contactButton = document.getElementById("contact");

// Get the container element where the page contents will be displayed
// const mainContent = document.getElementById("#whole-container");

// Add event listeners to the buttons
// homeButton.addEventListener("click", loadHomePage);
// aboutButton.addEventListener("click", loadAboutPage);
// contactButton.addEventListener("click", loadContactPage);

// Function to load the home page
// function loadHomePage() {
//   fetch("http://127.0.0.1:5500/index.html")
//     .then((response) => response.text())
//     .then((html) => {
//       mainContent.innerHTML = html;
//     });
// }

// Function to load the about page
// function loadAboutPage() {
//   fetch("about.html")
//     .then((response) => response.text())
//     .then((html) => {
//       mainContent.innerHTML = html;
//     });
// }

// Function to load the contact page
// function loadContactPage() {
//   fetch("contact.html")
//     .then((response) => response.text())
//     .then((html) => {
//       mainContent.innerHTML = html;
//     });
// }
// loadHomePage();

// Get the buttons
// const backButton = document.querySelector('#back-button');
// const forwardButton = document.querySelector('#forward-button');

// Add event listeners
// backButton.addEventListener('click', () => {
//   history.back();
// });

// forwardButton.addEventListener('click', () => {
//   history.forward();
// });
// <!-- HTML markup for displaying the data and navigation buttons -->
// <div id="data-container"></div>
// <button id="prev-btn">Previous</button>
// <button id="next-btn">Next</button>

// assume data is an array of objects, where each object represents a page
// const data = [
//   { page: 1, content: "This is the content for page 1" },
//   { page: 2, content: "This is the content for page 2" },
//   { page: 3, content: "This is the content for page 3" },

// ];

// let currentPageIndex = 0;
// const dataContainer = document.getElementById("data-container");
// const prevBtn = document.getElementById("prev-btn");
// const nextBtn = document.getElementById("next-btn");

// function displayPageData() {
//   const currentPageData = data[currentPageIndex];
//   const pageContent = currentPageData.content;
//   dataContainer.innerHTML = pageContent;
// }

// function updateNavigationButtons() {
//   prevBtn.disabled = currentPageIndex === 0;
//   nextBtn.disabled = currentPageIndex === data.length - 1;
// }

// function goToPreviousPage() {
//   if (currentPageIndex > 0) {
//     currentPageIndex--;
//     displayPageData();
//     updateNavigationButtons();
//   }
// }

// function goToNextPage() {
//   if (currentPageIndex < data.length - 1) {
//     currentPageIndex++;
//     displayPageData();
//     updateNavigationButtons();
//   }
// }

// prevBtn.addEventListener("click", goToPreviousPage);
// nextBtn.addEventListener("click", goToNextPage);

// displayPageData();
// updateNavigationButtons();

// const backBtn = document.getElementById("backBtn");
// const nextBtn = document.getElementById("#next-btn");

// Go back to the previous page when the Backward button is clicked
// backBtn.addEventListener("click", function () {
//   history.back();
// });

// Go to the next page when the Next button is clicked
// const nextBtn = next - btn;
// const currentUrl = "page1.html";

// const nextBtn = document.getElementById("#next-btn");

// nextBtn.addEventListener("click", function () {
//   const currentUrl = window.location.href;
//   const currentUrlIndex = currentUrl.lastIndexOf("page1.html");
//   const currentUrlWithoutPageName = currentUrl.substring(
//     0,
//     currentUrlIndex + 1
//   );

//   const currentPageName = currentUrl.substring(currentUrlIndex + 1);
//   const currentPageNumber = parseInt(currentPageName.replace(/\D/g, ""));

//   const nextPageNumber = currentPageNumber + 1;
//   const nextPageName = "page" + nextPageNumber + ".html";
//   const nextPageUrl = currentUrlWithoutPageName + nextPageName;

//   window.location.href = nextPageUrl;
// });

// <!DOCTYPE html>
// <>
//   <head>
//     <meta charset="utf-8">
//     <title>My Website</title>
//   </head>
//   < onload="loadPage()">
//     <div id="content"></div>
//     <button id="backBtn" onclick="previousPage()">Back</button>
//     <button id="nextBtn" onclick="nextPage()">Next</button>

// Define an array of page URLs
var pageUrls = [
  "http://127.0.0.1:5500/page1.html",
  "http://127.0.0.1:5500/page2.html#",
  "http://127.0.0.1:5500/page3.html#",
  "http://127.0.0.1:5500/page4.html#",
  "http://127.0.0.1:5500/page5.html#",
];

// Define a variable to hold the current page index
var currentPageIndex = 0;

// Function to load the current page
function loadPage() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", pageUrls[currentPageIndex], true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Insert the HTML content into the page
      var content = document.getElementById("content");
      content.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

// Function to go to the previous page
function previousPage() {
  if (currentPageIndex > 0) {
    currentPageIndex--;
    loadPage();
  }
}

// Function to go to the next page
function nextPage() {
  if (currentPageIndex < pageUrls.length - 1) {
    currentPageIndex++;
    loadPage();
  }
}
