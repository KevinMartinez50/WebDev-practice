// so the goal is to bring the blur down to 0px for BG
// and bring the loading screen to 100%

// so first thing is to gather the needed variables for this project
const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

// we make new variables load and int using the let instead of const
// which makes there 2 variables mutable
// load will be 0 while increasing to 100
let load = 0;
// int will be using setInterval which will run the blurring function and will run 30 MILISECONDS
let int = setInterval(blurring, 30);

// blurring function so int can run
function blurring() {
  load++;
  // this will make int run with no stop so we need to make an if statement to shut it off after 100
  if (load > 99) {
    // clearInterval will stop setInterval after the if statement is executed
    clearInterval(int);
  }

  // innerText manipulates text in the html
  // so in this case i wanted to increase the text in load
  loadText.innerText = `${load}%`;

  // .style will manipulate properties in CSS
  // so in this case i want the opacity of this text to fade away once loading hits 100%
  // but something that is confusing is that the way opacity works is that 1 is solid
  // while 0 is transparent there is no inbetween
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// for this we'll use stack overflow and understand what the user is doing
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

// so as the question in the post how to we map a range of numbers to another range of numbers?
// so we want to map 0 to 100 to 1 - 0 opacity

// so it will take in a number witht he minimum and maximum of the "in number" so 0 to 100
// out min, and out max will be the opacity 1 - 0
const scale = (num, in_min, in_max, out_min, out_max) => {
  // so to simplify it we're using scale as the function with the parameters to subtract, divide and, then add to get our results
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
