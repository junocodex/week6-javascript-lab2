"use strict";

const bands = [
  { name: "Daft Punk", genre: "electronic", formedYear: 1993, active: true },
  { name: "The Dillinger Escape Plan", genre: "metalcore", formedYear: 1997, active: true, },
  { name: "Cynic", genre: "prog metal", formedYear: 1987, active: true },
];

function render(bandArray) {
  for (let i = 0; i < bandArray.length; i++) {
    let active = "";

    const band = bandArray[i];

    if (band.active) {
      active = "Active";
    } else {
      active = "Not Active";
    }

    let card = `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">${band.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${band.genre}</h6>
      <p class="card-text">${band.formedYear}</p>
      <p class="card-text">${active}</p>
      
        </div>
      </div>`;
    document.getElementById("main").innerHTML += card;
  }
}
render(bands);
