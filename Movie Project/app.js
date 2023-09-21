// we're working with APIs again for this project.
// so first thing is name our variables with the data that is needed.
const main = document.getElementById("main");
const API_Authentication =
  "https://www.themoviedb.org/authenticate/{eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzA4NTU0ZjNiODc1NTU4MjM4MGU0MjI4ZTJjYTQ3NSIsInN1YiI6IjY0ZjkyYmY4NWYyYjhkMDBjNDM1NWVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KLWzVPaLibKIRSOy5A31o_JIGJ1Dp5C_2-7paRck8g8}";
const API_URL =
  "http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc_api_key=4308554f3b8755582380e4228e2ca475&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API =
  'http://api.themoviedb.org/3/search/movie?api_key=4308554f3b8755582380e4228e2ca475&query="';

// so at the moment we're just trying to see if the API works
// as of now it doesn't so i need to fix the API
const form = document.getElementById("form");
const search = document.getElementById("search");
// get initial movies
getMovies(API_URL);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}></img>" />
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
`;

    main.appendChild(movieEl);
  });
}
function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
