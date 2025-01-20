"use strict";

const products = [
  { name: "Chicken", category: "meat", price: "$9.99", inStock: true },
  { name: "Eggs", category: "produce", price: "$3.99", inStock: false },
  { name: "Bread", category: "bakery", price: "$4.99", inStock: true },
];

function render(productArray) {
  for (let i = 0; i < productArray.length; i++) {
    let inStock = "";

    const product = productArray[i];

    if (product.inStock) {
      inStock = "In Stock";
    } else {
      inStock = "Not in Stock";
    }

    let card = `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${product.category}</h6>
      <p class="card-text">${product.price}</p>
      <p class="card-text">${inStock}</p>
              </div>
      </div>`;
    document.getElementById("main").innerHTML += card;
  }
}
render(products);
