// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  mouseEnter: function () {
    const textElement = document.querySelector("h2");
    textElement.innerText = "The mouse is here!";
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    textElement.style.color = randomColor;
  },
  mouseLeave: function () {
    const textElement = document.querySelector("h2");
    textElement.innerText = "The mouse is gone!";
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    textElement.style.color = randomColor;
  },
  resize: function () {
    const textElement = document.querySelector("h2");
    textElement.innerText = "You just resized!";
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    textElement.style.color = randomColor;
  },
  rightClick: function (event) {
    event.preventDefault();
    const textElement = document.querySelector("h2");
    textElement.innerText = "That was a right click!";
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    textElement.style.color = randomColor;
  },
};

const textElement = document.querySelector("h2");
textElement.addEventListener("mouseenter", superEventHandler.mouseEnter);
textElement.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.rightClick);
