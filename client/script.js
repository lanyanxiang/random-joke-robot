// Selectors
const btnSpeakJoke = document.getElementById("button-joke");
const audioSpeakJoke = document.getElementById("audio-joke");

// Listeners
btnSpeakJoke.addEventListener("click", async () => {
  btnSpeakJoke.disabled = true;
  console.log(await getSingleJoke());
  btnSpeakJoke.disabled = false;
});

/**
 * Get a single joke
 * @returns string joke
 */
async function getSingleJoke() {
  try {
    const url =
      "https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";
    const response = await fetch(url);
    const data = await response.json();
    return data.joke;
  } catch (error) {
    console.error(error);
  }
}
