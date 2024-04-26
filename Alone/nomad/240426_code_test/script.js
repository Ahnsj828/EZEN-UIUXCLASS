const body = document.querySelector("body");
const text = document.querySelector("h1");

function handleResize() {
  const length = window.innerWidth;

  if (length < 500) {
    body.classList.add("small-background");
    body.classList.remove("medium-background");
    body.classList.remove("large-background");
    console.log("small");
  } else if (length > 500 && length < 900) {
    body.classList.remove("small-background");
    body.classList.add("medium-background");
    body.classList.remove("large-background");
    console.log("medium");
  } else if (length > 900) {
    body.classList.remove("small-background");
    body.classList.remove("medium-background");
    body.classList.add("large-background");
    console.log("large");
  }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);
