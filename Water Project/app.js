// So starting this project we want to fill the big cup of water using the smaller cups
// lets bring what we need for the DOM
const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

// So we want to fill the big cup every time we use a small cup.
updateBigCup();

// so how we're going to handle this is to take all the small cups and putting them into a forEach

smallCups.forEach((cup, idx) => {
  // so what we want to do is add an event listener to each of the cups
  // we're going to call a function and pass it idx
  cup.addEventListener("click", () => highlightCups(idx));
});

//
function highlightCups(idx) {
  // we want to run a check if the cup is already highlighted and the next one is not we want to decrease the index by 1

  // so lets use an if statement and we want to know if the idx contains the class element "full"
  if (
    // contain method is self explanitory if it checks if an element or property is there
    // && means and so thing of it as another requirement that if not fufilled will stop any code from being executed
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  // we're going to take all the small cups and loop through
  // we're using idx2 since we already have an idx in our parameters
  smallCups.forEach((cup, idx2) => {
    // so if idx2 is less than or equal to idx
    if (idx2 <= idx) {
      // we will add "full" into the class
      cup.classList.add("full");
    } else {
      // otherwise we will remove the "full" from the class
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-full.full").length;

  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px `;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
