import express from "express";
import "express-async-errors";
import cors from "cors";
import { json } from "body-parser";

import { jokeRouter } from "./routes";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors";

const app = express();

// Uncomment the following line if we are using
//  load balancers in the local environment.
// app.set("trust proxy", true);

app.use(json());
app.use(cors());

app.use("/joke", jokeRouter);

// If non of the above routes match, we throw a route not found
// error.
app.all("*", () => {
  throw new NotFoundError("Route not found");
});

app.use(errorHandler);

export { app };
