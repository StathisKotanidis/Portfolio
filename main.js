let menuBtn = document.querySelector(".menu-icon");
let sideNavbar = document.querySelector(".side-navbar");

menuBtn.addEventListener("click", () => {
  sideNavbar.classList.toggle("hidden");
});
