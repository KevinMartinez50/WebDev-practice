// In this project we want to show a code when someone presses a button on their keyboard
// lets start by getting our variables
const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  // on line 7 what we're doing is called a conditional(ternary) operator
  // its an if/else statement, but in one line of code
  insert.innerHTML = `
<div class="key">
    ${event.key === "" ? "Space" : event.key}
    <small>event.key</small>
</div>
<div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
</div>

<div class="key">
    ${event.code}
</div>`;
});
/* 
so how i got the keyCode attributes is by console.log a letter 
then look into it in the web browser's dev tools
afterwards i looked at what i needed and used it in this project (key, keyCode, code)
*/
