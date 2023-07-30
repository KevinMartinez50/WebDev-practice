// For this project we'll be working with APIs
// To get started lets make some variables for this project
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

jokeBtn.addEventListener("click", generateJoke);

// so before anything happens we want it to generate a joke when the page loads, so we'll make a function
// when using await inside a function always remember to put async to the function
async function generateJoke() {
  //making a variable makes the fetch request look cleaner so thats why we're putting it it here
  const config = {
    // we'll make an object value with an headers value
    headers: {
      // Accept being the  key and application/json as a value
      Accept: "application/json",
    },
  };

  // remember we're using an API this time so we'll be using fetch()
  // fetch api helps JavaScript to access and manipulate parts of HTTP, such as request or responses
  // fetch() itself is asynchronous across all networks
  // when using await to wait when its done fetching
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();

  jokeEl.innerHTML = data.joke;

  // THIS IS A DIFFERENT WAY OF FETCHING ------------------------------------------------------------------------------------------------
  //
  // .then((res) => res.json())
  // .then((data) => console.log(data));
  // .then method is a promise that takes up 2 arguments
  // callback functions for the fulfilled and rejected cases of the promises allowing us to chain calls and othe promises

  // so for us to use one of the APIs dad joke we need to take our jokeEL innerHTML and convert it to a dad joke
  // data.joke will give us what we need and the dad joke will appear
}
