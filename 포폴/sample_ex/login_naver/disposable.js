const error = document.querySelector("div")
const numberInput = document.querySelector("input")
const loginBtn = document.querySelector("button")

loginBtn.addEventListener("click", function() {
  if (numberInput.value === "") {
    error.style.opacity = "1";
  }
});

// --------------------------------------

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  loginBtn.addEventListener("click", function(event) {
      event.preventDefault(); 
  });
});