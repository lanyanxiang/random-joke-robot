import textToSpeech from "@google-cloud/text-to-speech";

// client to gcloud api
const client = new textToSpeech.TextToSpeechClient();

interface ISynthesizeSpeechRequest {
  input: Object;
  voice?: Object;
  audioConfig?: Object;
}

/**
 * Return voice encoded using LINEAR16 corresponding to message
 * in the specified language languageCode.
 * @param message the message to convert to voice
 * @param languageCode the language code of the message
 */
export const getVoice = async (message: string, languageCode: string) => {
  const request: ISynthesizeSpeechRequest = {
    input: { text: message },
    voice: { languageCode: languageCode, name: "en-US-Wavenet-A" },
    audioConfig: {
      audioEncoding: "LINEAR16",
      pitch: 0,
      speakingRate: 1,
    },
  };

  const [response] = await client.synthesizeSpeech(request);

  return response.audioContent;
};
