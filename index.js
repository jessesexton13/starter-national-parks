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
