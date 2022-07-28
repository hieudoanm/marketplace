import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import isNil from 'lodash/isNil';

export const errorHandler = (
  error: HttpError | null,
  _request: Request,
  response: Response,
  next: NextFunction
) => {
  if (isNil(error)) {
    next();
    return;
  }

  const message = error.message || 'Error Message';
  response.status(error.status || 500).json({ message, error });
};

export default errorHandler;
