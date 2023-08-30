// so we want it to increment (or make the numbers rise to a certain point) in this project

// Lets get our variables with the data of counter
const counters = document.querySelectorAll(".counter");

// and we need to use a forEach function for the counter's inner text
counters.forEach((counter) => {
  // we want our  counter to be 0
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    // the increment variable shows the speed of how much you want it to reach its target so the higher the number the slower it gets
    const increment = target / 200;

    if (c < target) {
      // Math.ceil is a method that will always rounds and return to smallest interger or equal to the given number
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      // So the counter number doesn't go over the limit
      counter.innerText = target;
    }
  };
  // lastly make sure you call the function in order for the project to work.
  updateCounter();
});
