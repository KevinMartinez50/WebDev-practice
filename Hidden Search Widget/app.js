// step 1 gather the variables needed for this project
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  // the toggle class add and removes a class for everytime you click on it
  // which is faster than manually adding it and removing it with classList.add, classlist.remove
  search.classList.toggle("active");
  //the focus method as stated will focus on the selected element in this case it will default by selecting the search bar
  input.focus();
});
