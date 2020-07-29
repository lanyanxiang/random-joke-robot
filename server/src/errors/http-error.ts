/**
 * This class represents an HttpError with an http status code
 * and a list of error messages.
 * Error messages returned by serializeErrors method should
 * be sent to the clients.
 * Standard message property of the Error class is used for
 * logging purposes only.
 *
 * @see Error
 * @version 1.0
 */
export abstract class HttpError extends Error {
  abstract statusCode: number;

  /**
   * Construct HttpError
   * @param message Error message for logging purposes
   */
  constructor(message?: string) {
    super(message);

    // Configure this class to work with type script
    // Need this statement when extending a typescript built-in class
    Object.setPrototypeOf(this, HttpError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
