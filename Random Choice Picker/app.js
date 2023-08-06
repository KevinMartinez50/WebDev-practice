// so this project we want to type out some choices and then the website will pick one at random
// lets get our variables

const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");
// we want to automatically want the cursor on the textarea
textarea.focus();

textarea.addEventListener("keyup", (e) => {
  // we create a function
  // e.target.value will be whatever we type in in the textarea
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

// this whole function is to create tags after we type something in the text
function createTags(input) {
  // so what we want is to split this and turn it into an array
  const tags = input
    // split as it suggest it splits any arrays
    .split(",")
    // filter as it suggest it filters anything that you dont want
    // we're using trim() to get rid of any spaces in the string
    .filter((tag) => tag.trim() !== "")
    // map will hold key-value pairs and remember the original insertion and order
    .map((tag) => tag.trim());
  //
  tagsEl.innerHTML = "";

  // so for each tag(or array)
  tags.forEach((tag) => {
    // we will create a new span (element)
    const tagEl = document.createElement("span");
    // add tag as its class
    tagEl.classList.add("tag");
    // whatever the tag's input is will be the text
    tagEl.innerText = tag;

    tagsEl.appendChild(tagEl);
  });
}

// this one is going to be heavy so lets start
function randomSelect() {
  // so we add a variable called times and give it a number value
  // this will be our starting point
  // so what this will do is the number of times it will highlight
  const times = 30;

  // then we make another variable called interval that will use the setInterval method
  // setInterval is a method that calls the function at specified intervals or milliseconds
  //  this will continue until we use a clearInterval function
  const interval = setInterval(() => {
    // within this setInterval we'll make another variable and equal that to a function pickRandomTag
    const randomTag = pickRandomTag();

    // then we'll get 2 more functions highLight and the unHighlight tag
    // we use the highlight function with the parameters of randomTag
    highlightTag(randomTag);

    // then we'll set a Timeout this is so we can flick one of the tags on and off
    // setTimeout() sets a timer which will execute the function or piece of code once time expires
    setTimeout(() => {
      // then we use unhighlight again for the randomTag
      unHighlightTag(randomTag);
      // the 100 means the milliseconds so it will activate the function at 100 milliseconds
    }, 100);
  }, 100);

  // so here is where the app decides where to stop
  // so once again we use the setTimeout
  setTimeout(() => {
    // clearInterval is used to stop our setInteval from going on a loop
    clearInterval(interval);
    // we make another setTimeout function
    setTimeout(() => {
      // within it we make another variable randomTag = to pickRandomTag
      const randomTag = pickRandomTag();

      // and we highlight randomTag
      highlightTag(randomTag);
    }, 100);
    // this we multiply the times to 100 (times * interval)
  }, times * 100);
}

// the pickRandomTag function will be using the Math. methods
function pickRandomTag() {
  // make a variable to select the tags
  const tags = document.querySelectorAll(".tag");
  // Math.floor is a function that will ALWAYS round down to the nearest integer
  // Math.random() is a function that as it suggest will choose a random number that is greater than or equal to 0 and less than 1
  return tags[Math.floor(Math.random() * tags.length)];
}

// these 2 are simple functions
// with the paramaters of tag we want to add the highlight class into it or remove it
function highlightTag(tag) {
  tag.classList.add("highlight");
}
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
