import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv";
import { AppError } from "../errors/appError";

export const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token = req.headers.authorization as string;

  if (!token) {
    throw new AppError("Por favor faça o login", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(
    token,
    process.env.SECRET_KEY,
    (error: { message: string }, decoded: { id: string }) => {
      if (error) {
        throw new AppError(error.message, 401);
      }

      req.user = {
        id: decoded.id,
      } as { id: string };
      return next();
    }
  );
};
