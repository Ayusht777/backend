import { Request, Response, NextFunction } from "express";
type asyncHandlerTypes = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;
const asyncHandler = (fn: asyncHandlerTypes) => {
  return (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next).catch((err) => next(err)));
};

export { asyncHandler };