// for this project all we need to do put an event listener on the toggle id and put in the toggle class list on the nav id

// lets grab both ids that are needed for this project
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

// something new that we haven't seen before are arrow functions
// so something cool about them is if you only have one line of code you can just put it without the curly brackets
toggle.addEventListener("click", () => nav.classList.toggle("active"));
