"use strict";
// const slider = document.querySelector(".slider");
// const handle = document.querySelector(".slider-handle");
// const labels = document.querySelectorAll(".slider-label");

// let isDown = false;

// handle.addEventListener("mousedown", () => {
//   isDown = true;
// });

// document.addEventListener("mouseup", () => {
//   isDown = false;
// });

// document.addEventListener("mousemove", (e) => {
//   if (!isDown) return;

//   let position = e.clientX - slider.getBoundingClientRect().left;
//   if (position < 0) position = 0;
//   if (position > slider.offsetWidth) position = slider.offsetWidth;

//   handle.style.left = `${position}px`;

//   const value = position / slider.offsetWidth;
//   if (value < 0.5) {
//     labels[0].classList.add("active");
//     labels[1].classList.remove("active");
//   } else {
//     labels[1].classList.add("active");
//     labels[0].classList.remove("active");
//   }
// });
// const sliderButton = document.querySelector(".toggle-btn");

// sliderButton.addEventListener("click", () => {
//   sliderButton.classList.toggle("hidden");
//   if (sliderButton.classList.contains("hidden")) {
//     sliderButton.textContent = "visibile";
//   } else {
//     sliderButton.textContent = "hidden";
//   }
// });
// const sliderButton = document.querySelector(".toggle-btn");

// sliderButton.addEventListener("click", () => {
//   const visibleElements = document.querySelector(".visible");
//   const hiddenElements = document.querySelector(".hidden");

//   if (visibleElements.style.display === "none") {
//     visibleElements.style.display = "block";
//     hiddenElements.style.display = "none";
//   } else {
//     visibleElements.style.display = "none";
//     hiddenElements.style.display = "block";
//   }
// });
const sliderButton = document.querySelector(".toggle-btn");
sliderButton.addEventListener("click", () => {
  const element1 = document.querySelector(".visible");
  const element2 = document.querySelector(".hidden");
  if (element1.classList.contains("visible")) {
    element1.classList.remove("visible");
    element1.classList.add("hidden");
    element2.classList.remove("hidden");
    element2.classList.add("visible");
  } else {
    element1.classList.remove("hidden");
    element1.classList.add("visible");
    element2.classList.remove("visible");
    element2.classList.add("hidden");
  }
});
// const sliderButton = document.getElementById(".toggle-btn");
// sliderButton.addEventListener("click", () => {
//   const element1 = document.getElementById(".visible");
//   const element2 = document.getElementById(".hidden");
//   if (element1.classList.contains("visible")) {
//     element1.classList.remove("visible");
//     element1.classList.add("hidden");
//     element2.classList.remove("hidden");
//     element2.classList.add("visible");
//   } else {
//     element1.classList.remove("hidden");
//     element1.classList.add("visible");
//     element2.classList.remove("visible");
//     element2.classList.add("hidden");
//   }
// });

// const toggleBtn = document.querySelector(".toggle-btn");
// const toggleContent = document.querySelector(".visible");

// toggleBtn.addEventListener("click", () => {
//   toggleBtn.classList.toggle("visible");
//   toggleContent.classList.toggle("hidden");
// });

// function toggle() {
//   const element1 = document.querySelector(".visible");
//   const element2 = document.querySelector(".hidden");
//   if (element1.classList.contains("visibile")) {
//     element1.classList.remove("visible");
//     element1.classList.add("hidden");
//     element2.classList.remove("hidden");
//     element2.classList.add("visible");
//   } else {
//     element1.classList.remove("hidden");
//     element1.classList.add("visible");
//     element2.classList.remove("visible");
//     element2.classList.add("hidden");
//   }
// }
// const btnNavE1 = document.querySelector(".visible");
// const headerE1 = document.querySelector(".hidden");
// btnNavE1.addEventListener("click", function () {
//   headerE1.classList.toggle("hidden");
// });
// const toggleButton = document.getElementById("toggle-button");
// const myElement = document.getElementById("element2");

// toggleButton.addEventListener("click", () => {
//   myElement.classList.toggle("hidden");
// });
// const toggleButton = document.getElementById("toggle-button");
// const monthsDiv = document.querySelector(".visible");
// const yearsDiv = document.querySelector(".hidden");

// toggleButton.addEventListener("click", () => {
//   monthsDiv.classList.toggle("hidden");
//   yearsDiv.classList.toggle("hidden");
// });
// const sliderButton = document.querySelector(".toggle-btn");
// sliderButton.addEventListener("click", (e) => {

//   const visibleElements = document.querySelector(".visible");
//   const hiddenElements = document.querySelector(".hidden");

//   if (visibleElements.style.display === "none") {
//     visibleElements.style.display = "block";
//     hiddenElements.style.display = "none";
//   } else {
//     visibleElements.style.display = "none";
//     hiddenElements.style.display = "block";
//   }
// });
// const sliderButton1 = document.querySelector(".toggle-btn");
// sliderButton1.addEventListener("click", (e) => {
//   const element1 = document.querySelector(".visible");
//   const element2 = document.querySelector(".hidden");
//   if (element1.classList.contains(".visible")) {
//     element1.classList.remove(".visible");
//     element1.classList.add(".hidden");
//     element2.classList.remove(".hidden");
//     element2.classList.add("visible");
//   } else {
//     element1.classList.remove(".hidden");
//     element1.classList.add(".visible");
//     element2.classList.remove(".visible");
//     element2.classList.add(".hidden");
//   }
// });

// const sliderButton1 = document.querySelector(".toggle-btn");
// sliderButton1.addEventListener('click',(e)=>{
//   const visibleElements1 = document.querySelector(".visible");
//   const hiddenElements1 = document.querySelector(".hidden");
//   if(visibleElements1.contains=== '')
// })
// const button = document.getElementById("#toggle-button");
// const div = document.getElementById("#btn-div");

// button.addEventListener("click", function () {
//   div.classList.toggle(".visible");
//   div.classList.toggle(".hidden");
// });
// get a reference to the back button element
// var backButton = document.getElementById("back-btn");

// add a click event listener to the back button
// backButton.addEventListener("click", function (e) {
// prevent the default behavior of the button
// e.preventDefault();

// use the history object to go back to the previous page
//   window.history.back("click");
// });

// Initialize variables
// var pageContent = document.getElementById("page-content-1");
// var btnBack = document.getElementById("back-btn");
// var btnNext = document.getElementById("next-btn");
// var currentPage = 1;

// Load all the pages with a singel javascript file:
// Define page contents
// var pages = [
//   "page-content-1",
//   "page-content-2",
//   "page-content-3",
//   "page-content-4",
//   "page-content-5",
// ];

// Function to load page content
// function loadPage(pageNumber) {
//   pageContent.innerHTML = pages[pageNumber - 1];
// }

// Load the initial page
// loadPage(currentPage);

// Add event listeners for the "back" and "next" buttons
// btnBack.addEventListener("click", function () {
//   if (currentPage > 1) {
//     currentPage--;
//     loadPage(currentPage);
//   }
// });

// btnNext.addEventListener("click", function () {
//   if (currentPage < pages.length) {
//     currentPage++;
//     loadPage(currentPage);
//   }
// });
// loadPage("page-content-1");
// let currentUrl = function () {
//   return window.location.href();
// };
// const url = "http://127.0.0.1:8080/#";
// function loadPage(url, containerId) {
//   const container = document.getElementById("#page-content-1");
//   fetch(url)
//     .then((response) => response.text())
//     .then((data) => (container.innerHTML = data))
//     .catch((error) => console.log(error));
// }
// const homeBtn = document.getElementById("#next-btn");
// homeBtn.addEventListener("click", () => {
//   loadPage("home.html", "content-container");
// });

// const aboutBtn = document.getElementById("");
// aboutBtn.addEventListener("click", () => {
//   loadPage("about.html", "content-container");
// });
// How do we dubug our code in javascript?
// function next() {
//   window.history.forward();
// }

// function previous() {
//   window.history.back();
// }

// Define an array of page URLs
var pageUrls = [
  "http://127.0.0.1:5500/page1.html",
  "http://127.0.0.1:5500/page2.html",
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
      var content = document.getElementById("#container");
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
