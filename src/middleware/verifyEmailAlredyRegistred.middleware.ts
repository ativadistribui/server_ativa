import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { AppError } from "../errors/appError";
import AppDataSource from "../data-source";

export const verifyEmailAlreadyRegistredMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const companyRegistred = AppDataSource.getRepository(User);

  const company = (await companyRegistred.findBy({
    email: req.body.email,
  })) as User[];

  if (company.length > 0) {
    throw new AppError("E-mail já está registrado", 409);
  }

  return next();
};
