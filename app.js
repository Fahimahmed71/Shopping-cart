document.getElementById("dark-mode").addEventListener("click", function () {
  const bodyEl = document.querySelector(".body");

  bodyEl.classList.toggle("bodydark");
});

// increase & decrease item
function input(isIncrease, item, num) {
  const priceEl = document.getElementById(item + "-price");
  const itemEl = document.getElementById(item + "-item");

  if (isIncrease == true) {
    itemEl.innerText = parseInt(itemEl.innerText) + 1;

    priceEl.innerText = parseInt(priceEl.innerText) + num;
  } else {
    if (itemEl.innerText == 0 && priceEl.innerText == 0) {
      alert("Cannot buy less than 0 ");
    } else {
      priceEl.innerText = parseInt(priceEl.innerText) - num;
      itemEl.innerText = parseInt(itemEl.innerText) - 1;
    }
  }
}

// glass increase & decrease
document.getElementById("glass-plus").addEventListener("click", function () {
  input(true, "glass", 30);
});

document.getElementById("glass-minus").addEventListener("click", function () {
  input(false, "glass", 30);
});

// Headphone increase & decrease
document
  .getElementById("headphone-plus")
  .addEventListener("click", function () {
    input(true, "headphone", 120);
  });

document
  .getElementById("headphone-minus")
  .addEventListener("click", function () {
    input(false, "headphone", 120);
  });

// buy Total
document.getElementById("glass-btn").addEventListener("click", function () {
  calculateTotal();
});

document.getElementById("headphone-btn").addEventListener("click", function () {
  calculateTotal();
});

// calculate
function calculateTotal() {
  const glassPriceEl = document.getElementById("glass-price");
  const headphonePriceEl = document.getElementById("headphone-price");
  const subTotalEl = document.getElementById("sub-total");
  const texEl = document.getElementById("tex");
  const totalEl = document.getElementById("total");

  subTotalEl.innerHTML =
    parseInt(glassPriceEl.innerText) + parseInt(headphonePriceEl.innerText);

  texEl.innerHTML = subTotalEl.innerText / 3;

  totalEl.innerHTML =
    parseInt(subTotalEl.innerText) + parseInt(texEl.innerText);
}
