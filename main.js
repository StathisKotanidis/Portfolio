function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".menu-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let calculatorLiveBtn = document.querySelector("#calculator-live");
let calculatorGitBtn = document.querySelector("#calculator-source");

calculatorLiveBtn.addEventListener("click", () => {
  window.open("https://stathiskotanidis.github.io/calculator/", "_blank");
});

calculatorGitBtn.addEventListener("click", () => {
  window.open("https://github.com/StathisKotanidis/calculator", "_blank");
});
