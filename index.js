console.log(document);
const heading = document.querySelector("h1");
console.log(heading);
const value = document.querySelector(".value");
console.log(value);
const button = document.querySelector("button");
console.log(button);
const statDiv = document.querySelector(".stats div");
console.log(statDiv);

const buttons = document.querySelectorAll("button");
console.log(buttons);

// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}

// find all divs containing ratings
const ratings = document.querySelectorAll(".rating-display .value");

// iterate over entire list
for (let element of ratings.values()) {
  console.log(element);
}

// find all divs containing areas
const areas = document.querySelectorAll(".area-display .value");

for (let i = 0; i < areas.length; i++) {
  const element = areas[i];
  console.log(element);
}

const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
  let content = desc.innerText;
  console.log(content);
}

for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }

  desc.innerHTML = content;
}

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);
  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

//creating new element with text
const parks = document.querySelectorAll(".park-display");

const numberParks = parks.length;

const newElement = document.createElement("div");

newElement.innerText = `${numberParks} exciting parks to visit`;

newElement.classList.add("header-statement");

//add element to the page
const header = document.querySelector("header");

header.appendChild(newElement);

//Removing DOM elements

// Get the parent element of all parks
// const main = document.querySelector("main");

// Select a single park
// const park = main.querySelector(".park-display");

// Remove that park
// main.removeChild(park);
