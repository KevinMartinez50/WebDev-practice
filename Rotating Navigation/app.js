// step 1 gather up all the properties needed for this small project

const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

// Step 2 add in the show-nav class and remove it function
open.addEventListener("click", () => {
  container.classList.add("show-nav");
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
