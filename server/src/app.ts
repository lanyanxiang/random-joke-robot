import express from "express";
import cors from "cors";
import { json } from "body-parser";

import { jokeRouter } from "./routes";
import { errorHandler } from "./middlewares/error-handler";

const app = express();

// Uncomment the following line if we are using
//  load balancers in the local environment.
// app.set("trust proxy", true);

app.use(json());
app.use(cors());

app.use("/joke", jokeRouter);
app.use(errorHandler);

export { app };
