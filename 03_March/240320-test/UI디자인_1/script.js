const button = document.querySelector(".chooseButton");
const result = document.querySelector(".result span");
const total = document.querySelector(".total");
const chooseButton = document.querySelector(".choose");
const deleteButton = document.querySelector(".delete");

const chooseNumber = {
  digitCount: chooseButton,
  maxNumber: total,
};

const choosePeople = () => {
  const { digitCount, maxNumber } = chooseNumber;
  let chooseNum = new Set();
  for (let i = 0; i < digitCount; i++) {
    chooseNum.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (chooseNum.size === chooseButton) {
    result.innerText = `${[...maxNumber]}`;
  }
};

button.addEventListener("click", choosePeople);
