import { Request, Response, NextFunction } from 'express';
import httpErrors from 'http-errors';

export const notFoundHandler = (
  _request: Request,
  _response: Response,
  next: NextFunction
) => {
  next(httpErrors(404));
};

export default notFoundHandler;
