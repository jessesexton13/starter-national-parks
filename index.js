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

//select a button on the page
const firstBtn = document.querySelector("button");

firstBtn.addEventListener("click", function (event) {
  console.log(event.target.parentNode);
});

// function to handler favorite button clicks
const favoriteButtonClickHandler = (event) => {
  const park = event.target.parentNode;
  park.style.backgroundColor = "#c8e6c9";
};

// function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// function for sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkARating = parseFloat(
    parkA.querySelector(".rating-display > .value").innerText
  );
  const parkBRating = parseFloat(
    parkB.querySelector(".rating-display > .value").innerText
  );
  return parkBRating - parkARating;
};

// function for handling the nameSorter click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  get the main element
  const main = document.querySelector("main");

  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. empty the main
  main.innerHTML = "";

  // 4. create an array
  const parksArray = Array.from(parksList);

  // 5. sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// function to handle the ratingSorter click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  get the main element
  const main = document.querySelector("main");

  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. empty the main
  main.innerHTML = "";

  // 4. create an array
  const parksArray = Array.from(parksList);

  // 5. sort the array
  parksArray.sort(sortByRating);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// the point where all the code starts
const main = () => {
  // select the nameSorter link
  const nameSorter = document.querySelector("#name-sorter");

  // add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // select the ratingSorter link
  const ratingSorter = document.querySelector("#rating-sorter");

  // add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);

  // select all the buttons for all the parks
  const allBtns = document.querySelectorAll(".rate-button");

  // iterate the list of buttons and add an event handler to each
  allBtns.forEach((btn) => {
    btn.addEventListener("click", favoriteButtonClickHandler);
  });
};

// Add event listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", main);
