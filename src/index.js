function darkMode() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

let darkButton = document.querySelector(".dark-button");
darkButton.addEventListener("click", darkMode);
