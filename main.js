let menuBtn = document.querySelector(".menu-icon");
let menuLinks = document.querySelector(".menu-links");
menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("hidden");
});

// To hide the navbar after i clicked on a link

let mobileLis = document.querySelectorAll(".menu-links ul li");

mobileLis.forEach((element) => {
  element.addEventListener("click", () => {
    menuLinks.classList.add("hidden");
  });
});

let calculatorLiveBtn = document.querySelector("#calculator-live");
let calculatorGitBtn = document.querySelector("#calculator-source");

calculatorLiveBtn.addEventListener("click", () => {
  window.open("https://stathiskotanidis.github.io/calculator/", "_blank");
});

calculatorGitBtn.addEventListener("click", () => {
  window.open("https://github.com/StathisKotanidis/calculator", "_blank");
});

let restaurantLiveBtn = document.querySelector("#restaurant-live");
let restaurantGitBtn = document.querySelector("#restaurant-source");

restaurantLiveBtn.addEventListener("click", () => {
  window.open(
    "https://stathiskotanidis.github.io/Restaurant-layout/",
    "_blank"
  );
});

restaurantGitBtn.addEventListener("click", () => {
  window.open(
    "https://github.com/StathisKotanidis/Restaurant-layout",
    "_blank"
  );
});
