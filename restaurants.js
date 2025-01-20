"use strict";

const restaurants = [
  { name: "Olive Garden", cuisine: "italian", location: "city", rating: 8 },
  { name: "Chili's", cuisine: "casual", location: "town", rating: 7 },
  { name: "Popeyes", cuisine: "fast food", location: "village", rating: 4 },
];

function render(restaurantArray) {
  for (let i = 0; i < restaurantArray.length; i++) {
    const restaurant = restaurantArray[i];
    let star = "";

    for (let j = 0; j < restaurant.rating; j++) {
      star += "⭐";
    }

    let card = `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">${restaurant.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${restaurant.cuisine}</h6>
      <p class="card-text">${restaurant.location}</p>
      <p class="card-text">${star}</p>
              </div>
      </div>`;
    document.getElementById("main").innerHTML += card;
  }
}

render(restaurants);
