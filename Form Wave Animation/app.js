// so for this project we want a cool animation once you clicked the email or password
// so like what we do everytime we start with getting all of the variables we need in this project
const labels = document.querySelectorAll(".form-control lable");

// so lets use a forEach on this variable
labels.forEach((label) => {
  // we haven't use innerHTML or innerText so here's a quick overview of it
  // innerHTML manipulates the HTML element
  // innerText manipulates the Text of the html element
  label.innerHTML = label.innerText
    // so what .split does its splits the letter in an array
    .split("")
    // so we want ot manipulate it so we're going to use .map()
    // so we want to have a delay for each letter
    .map((letter, idx) => {
      `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        // .join will gather up all those letter(array) back together(to a string)
        .join("");
      // so what we did is to split it up into
      // then we turn them into the spans elements
      // then join them back together
    });
});
