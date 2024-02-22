const sizes = document.querySelectorAll(".size span");
const colors = document.querySelectorAll(".color span");
const like = document.querySelector(".like");
// console.log(sizes);

sizes.forEach((size) => {
  size.addEventListener("click", function () {
    function siblins(e) {
      const children = e.parentElement.children;
      for (let i = 0; i < children, length; i++) {
        children[i].classList.remove("active");
      }
    }
    siblins(this);
    this.classList.add("avtive");
  });
});

colors.forEach((color) => {
  color.addEventListener("click", function () {
    function siblins(e) {
      const children = e.parentElement.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
      }
    }
  });
});

like.addEventListener("click", () => {
  like.classList.toogle("active");
});
