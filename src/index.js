age = prompt("Hi! You must be 21^ to enter. Please enter your age.");
if (age < 21) {
  alert("Sorry, you are not old enough.");
} else {
  alert("Cheers! Welcome in!");
}

function darkMode() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

let darkButton = document.querySelector(".dark-button");
darkButton.addEventListener("click", darkMode);
