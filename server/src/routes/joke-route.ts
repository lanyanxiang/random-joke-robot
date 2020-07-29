import express, { Request, Response } from "express";

import { getVoice } from "../apis/google-text-to-speech";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {});

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
 * Obtain audio of the given joke
 * @param joke joke to be converted to audio
 */
const getJokeAudio = async (joke: string) => {
  getVoice("hello world", "en-US");
};

export { router };
