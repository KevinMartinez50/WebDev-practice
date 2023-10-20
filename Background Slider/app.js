// so first thing to do whenever we're using JS is to get our variables

const body = document.body; // to start we want to use the "document."
const slides = document.querySelectorAll(".slide"); // sometimes for querySelector
const leftBtn = document.getElementById("left"); // or getElementById
const rightBtn = document.getElementById("right");

// we use a let keyword for the slide which we'll use for the btn later on
let activeSlide = 0; // remember that the let keyword makes the variable mutable

// remember about addEventListener will let us manipulate the DOM
rightBtn.addEventListener("click", () => {
  activeSlide++; //we're incrementing the activeSlide

  if (activeSlide > slides.length - 1) {
    // we want to use an if statement whenver we go over the lengths of the slide
    activeSlide = 0;
  }

  setBgtoBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--; //on this one we're decrementing the activeSlide

  if (activeSlide < 0) {
    // we want to use an if statement whenver we go over the lengths of the slide
    activeSlide = slides.length - 1;
  }

  setBgtoBody();
  setActiveSlide();
});

setBgtoBody();

// to creat a function we do so as seen below this comment if parameters are needed we put it inside the parenthesis
function setBgtoBody() {
  // so what we want to do is to CHANGE the background image every time this function is called

  // whenever we deal with CSS in javascript instead of the dashes we put in CSS were using CamelCase
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage; // the slides variable has that querySelectorAll is a node list that we can use
}
// now we want to set an active slide to the next image
// we use another function to do that
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active")); // since we're using an arrow function we don't need curly braces if its one line of code

  slides[activeSlide].classList.add("active");
}
