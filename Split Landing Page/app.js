// so what we want is when the user hovers over the left or right side of the screen it expands
// lets start by creating our variables that are needed for this project
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

// so this one isn't hard to understand since we have done this before
// so what we have to do is add and remove the class hover-right/hover-left in the container

//mouseenter also means hover so when the mouse enters the left side it will add the hover-left class
left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);

// mouseleave will perform the action once the mouse leaves the left side
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

// this is then copy and pasted for the right side of the screen
right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
