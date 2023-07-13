"use strict";

// step 1 create the variables needed for the project
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");

// since its a step by step list we use the "let" to equal 1 knowing it will increase or decrease
let currentActive = 1;

// step 2 we use the variables that we took and either add 1 to the currentActive or subtract 1
next.addEventListener("click", () => {
  currentActive++;
// the if statement will be executed if we go over the desired steps
  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  update();
});

// we copy what we made above and replace it with the minus symbol
prev.addEventListener("click", () => {
  currentActive--;
// this time if the current active is less than 1 then it should only equal 1 nothing less.
  if (currentActive < 1) {
    currentActive = 1;
  }
  // the update 
  update();
});

// step 3 adding and removing the "active" class 
function update() {
  circle.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circle.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
