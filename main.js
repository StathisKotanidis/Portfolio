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

let hairSalonLiveBtn = document.querySelector("#hair-salon-live");
let hairSalonGitBtn = document.querySelector("#hair-salon-source");

hairSalonLiveBtn.addEventListener("click", () => {
  window.open("https://stathiskotanidis.github.io/Hair-Salon/", "_blank");
});

hairSalonGitBtn.addEventListener("click", () => {
  window.open("https://github.com/StathisKotanidis/Hair-Salon", "_blank");
});

// Form submission

function handleFormSubmission(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  fetch("/", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        document.getElementById("message-popup").style.display = "block";
        event.target.reset();
      } else {
        alert(
          "There was an error sending your message. Please try again later."
        );
      }
    })
    .catch((error) => {
      alert("There was an error sending your message. Please try again later.");
    });

  return false;
}

console.log(...formData.entries()); // test
