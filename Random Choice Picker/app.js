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

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pick;

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
