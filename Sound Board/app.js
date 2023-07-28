// so this one is different since the whole project is just pressing sounds
// so to add some JS into this project we'll make the buttons here

// lets start with an array this time for our sounds
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// we want to loops through these so we use a forEach
sounds.forEach((sound) => {
  // then we create a variable called btn
  const btn = document.createElement("button");
  // and add that using classList.add
  btn.classList.add("btn");

  //then user innerText
  btn.innerText = sound;
  // we will then add an event listener that will play the noise AND
  // stop any noise that are currently playing
  btn.addEventListener("click", () => {
    // this function will stop any songs that are currently playing
    stopSongs();
    // we grab any noise by using getElementById and use .play() function
    document.getElementById(sound).play();
  });
  //this one will add our buttons for this project
  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    // then use .pause which will pause that noise
    // then to rest it we use currentTime and set it to 0
    song.pause();
    song.currentTime = 0;
  });
}
