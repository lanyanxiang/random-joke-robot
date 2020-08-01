// Constants
const SERVER_URI = "http://localhost:3000";

// Selectors
const btnSpeakJoke = document.getElementById("button-joke");
const audioSpeakJoke = document.getElementById("audio-joke");

const divJoke = document.getElementById("joke");
const pJoke = document.getElementById("joke-content");
const pCategory = document.getElementById("joke-category");
const pId = document.getElementById("joke-id");

// Listeners
btnSpeakJoke.addEventListener("click", async () => {
  btnSpeakJoke.disabled = true;

  try {
    const jokeData = await getSingleJoke();

    pJoke.innerText = jokeData.text;
    pCategory.innerText = jokeData.category;
    pId.innerText = `ID: ${jokeData.id}`;

    const audio = new Uint8Array(jokeData.audio.data);
    const blob = new Blob([audio], { type: "audio/wav" });
    audioSpeakJoke.src = URL.createObjectURL(blob);
    audioSpeakJoke.play();
  } catch (error) {
    pJoke.innerText = "Sorry, we are currently unable to process your request.";
    pCategory.innerText = "";
    pId.innerText = "";
  }

  divJoke.style.display = "block";
  btnSpeakJoke.disabled = false;
});

/**
 * Get a single joke
 * @returns string joke
 */
async function getSingleJoke() {
  try {
    const url = SERVER_URI + "/joke";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
