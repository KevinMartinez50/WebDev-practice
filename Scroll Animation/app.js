// so the project needs these boxes to be visible once they are in view
// so like usual we need the elements that selects these boxes
// we'll be using querySelectorAll because we want all boxes for this project
const boxes = document.querySelectorAll(".box");

// we want to then have an event when we scroll down
// so the addEventListener will have scroll for this project and it will affect the window (this meaning the user's window)
window.addEventListener("scroll", checkBoxes);

checkBoxes();
// we create the function checkBoxes for the animation of the boxes
function checkBoxes() {
  // so the issue now is that when we're scrolling down/up when do we need the boxes to show up?

  // so first we need to make another variable with the window height
  // so we want the tigger point to be LESS than the Innerheight and we can't use a fixed number
  // since it could change in a given point
  // so we use divide by 5 and then multiply it by 4 to get our trigger
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    // getBoundingClientRect() is a method returns a DOMrect(rectangle) object
    // which provides information on where that rectangle is located (top, bottom, left, right)
    // so in this case we want the top value
    const boxTop = box.getBoundingClientRect().top;

    //now we need to know if the top of the box is show or not
    // an if else statement will be perfect for this job
    if (boxTop < triggerBottom) {
      // so if boxTop is less than triggerBottom add show to the box
      box.classList.add("show");
    } else {
      // else remove show from box
      box.classList.remove("show");
    }
  });
}
