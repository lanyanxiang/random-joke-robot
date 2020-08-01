# Random Joke Robot

> A robot that **speaks** random jokes.

# Setup

## Client

Navigate to the client folder, use the file path of `index.html` or use a static server to view the client side app.

## Server

### Environmental Variables

The text to speech API provided by Google Cloud Platform was used during the construction of this project.
If you want to use other text to speech API provider, look into `src/apis/google-text-to-speech.ts` and update accordingly.

If you decide to stay with Google Cloud Text to Speech API, create a service account on Google Cloud Platform with appropriate permission.
I prefer the least priviledge principle and limit the service account to only work with the Text to Speech API, but it is up to you.

Generate a key for that service account, and create an environmental variable named exactly `GOOGLE_APPLICATION_CREDENTIALS` and set its value as the path to your service account credential (key).

If you are just testing the app out, the simpliest way would be to use the command line and run `export GOOGLE_APPLICATION_CREDENTIALS="[PATH]"` on MacOS or Linux, or `$env:GOOGLE_APPLICATION_CREDENTIALS="[PATH]"` on a Windows machine (**powershell**).
For production, decode this information in a `.env` file or use other equivalent methods.

Be sure to set the environmental variable correctly before you start the application.
If this is not done correctly, the application won't work.

### Installing Dependencies

It is obvious to see that we are using NPM for this project.
Run `npm install` to install all dependencies, and run `npm start` to start the server.

The server will be listening on port 3000.
If you wish to use any other ports, modify `index.ts` in the `server` folder.
Be sure to update the client script found in the `client` folder.
Perticularly, update the constant `SERVER_URI` to use the appropriate port.

# Other

Credits for robot gif: https://giphy.com/gifs/robot-cinema-4d-eyedesyn-3o7abtn7DuREEpsyWY

Google Cloud text to speech: https://cloud.google.com/text-to-speech/docs/libraries

Google Cloud Platform: https://cloud.google.com
