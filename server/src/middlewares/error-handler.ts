/**
 * Middleware to handle errors thrown in the application.
 *
 * @author Yanxiang Lan
 */

import { Request, Response, NextFunction } from "express";
import { HttpError } from "../errors";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).send(err.serializeErrors());
  }

  return res.status(400).send([
    {
      message: "Something went wrong",
    },
  ]);
};
