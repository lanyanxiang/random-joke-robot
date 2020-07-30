import express, { Request, Response } from "express";
import fetch from "node-fetch";

import { getVoice } from "../apis/google-text-to-speech";
import { InternalServerError } from "../errors";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const rawJoke = await getSingleJoke();
    const joke = processLineBreak(rawJoke);
    const audio = await getVoice(joke, "en-US");
    res.send({ text: joke, audio: audio });
  } catch (error) {
    throw new InternalServerError("Could not obtain joke at this time");
  }
});

// Helpers
/**
 * Obtain a random single joke from Joke API
 */
const getSingleJoke = async () => {
  try {
    const url =
      "https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";
    const response = await fetch(url);
    const data = await response.json();
    return data.joke;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Return a new text with all new line characters replaced to "..."
 * This function can be applied to text before converting it into audio,
 * so that pauses can be added whenever a new line character is found.
 *
 * @param text the text to be processed
 */
const processLineBreak = (text: string) => {
  return text.replace("/\n/gi", " ... ");
};

export { router };
