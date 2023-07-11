// steps 1
// create a variable for the elements that require the desired outcome

// using querySelectorAll will get all the elements with this class
const panels = document.querySelectorAll(".panel");

// step 2
// use that variable to add the desired class which would be panels.classList.add()
panels.forEach((panels) => {
  panels.addEventListener("click", () => {
    // after adding that we need to remove any existing panels with the active class
    // create a function in order to remove the class from panels
    removeActiveClasses();

    // we add that function before the classlist so that it can be removed first before the panel can be acitve
    panels.classList.add("active");
  });
});

// step 3
// using forEach which loops through the entire class that has panels use classList.remove() for all the panels
// afterward add it before the add() method.
function removeActiveClasses() {
  panels.forEach((panels) => {
    panels.classList.remove("active");
  });
}
